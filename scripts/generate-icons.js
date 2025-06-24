const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Convertimos funciones a promesas
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// Configuración de rutas
const PROJECT_ROOT = path.resolve(__dirname, '../');
const ICONS_DIR = path.join(PROJECT_ROOT, 'src', 'assets', 'icons');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'src', 'components', 'XIcons');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'index.ts');

const PRESERVE_COLOR_CATEGORIES = ['bnbEmpresas', 'bnbBancos'];

// ✅ Función corregida para procesar SVG
const processSVG = (content, filePath) => {
    // Determinar si está en una categoría que preserva colores
    const shouldPreserveColor = PRESERVE_COLOR_CATEGORIES.some(category =>
        filePath.includes(`${path.sep}${category}${path.sep}`) ||
        filePath.includes(`/${category}/`)
    );

    if (shouldPreserveColor) {
        console.log(`🎨 Preserving colors for ${path.relative(ICONS_DIR, filePath)}`);
        return content; // No modificar SVG
    }

    // Eliminar fills y strokes específicos solo para otras categorías
    let processed = content
        .replace(/fill="#?\w+"/g, '')
        .replace(/stroke="#?\w+"/g, '')
        .replace(/fill-opacity="[^"]*"/g, '')
        .replace(/stroke-opacity="[^"]*"/g, '');

    // Añadir fill="currentColor" si no está presente
    if (!processed.includes('fill=')) {
        processed = processed.replace(/<svg([^>]*)>/, '<svg$1 fill="currentColor">');
    }

    return processed;
};

// Función PascalCase mejorada
const pascalCase = (str) => {
    return str
        .replace(/\.[^/.]+$/, '') // Elimina extensión
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
};

// Función recursiva para buscar archivos SVG
async function findSVGFiles(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(
        subdirs.map(async (subdir) => {
            const res = path.resolve(dir, subdir);
            const stats = await stat(res);
            return stats.isDirectory() ? findSVGFiles(res) : res;
        })
    );
    return files.flat().filter(file => file.endsWith('.svg'));
}

// Función principal
async function main() {
    try {
        // Crear directorio si no existe
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
            console.log(`📂 Created directory: ${OUTPUT_DIR}`);
        }

        // Buscar todos los archivos SVG recursivamente
        const svgFiles = await findSVGFiles(ICONS_DIR);

        if (svgFiles.length === 0) {
            console.warn('⚠️ No SVG files found in icons directory');
            return;
        }

        console.log(`📊 Found ${svgFiles.length} SVG files`);

        // Procesar cada archivo SVG
        const processPromises = svgFiles.map(async (filePath) => {
            try {
                const content = await readFile(filePath, 'utf8');

                // Solo procesar si no tiene currentColor y no está en categoría protegida
                const shouldProcess = !content.includes('currentColor') &&
                    !PRESERVE_COLOR_CATEGORIES.some(cat =>
                        filePath.includes(`${path.sep}${cat}${path.sep}`) ||
                        filePath.includes(`/${cat}/`)
                    );

                if (shouldProcess) {
                    const processedContent = processSVG(content, filePath);
                    await writeFile(filePath, processedContent);
                    console.log(`✅ Processed ${path.relative(ICONS_DIR, filePath)}`);
                } else {
                    console.log(`⏭️  Skipped ${path.relative(ICONS_DIR, filePath)} (already processed or protected)`);
                }

                return filePath;
            } catch (error) {
                console.error(`❌ Error processing ${filePath}:`, error.message);
                return null;
            }
        });

        const processedFiles = (await Promise.all(processPromises)).filter(Boolean);

        // Generar archivo index.ts
        const exportsContent = [
            '// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY',
            '// Este archivo se genera automáticamente, no lo edites directamente\n',
            ...processedFiles.map(filePath => {
                const relativePath = path.relative(ICONS_DIR, filePath);
                const importPath = `@/assets/icons/${relativePath.replace(/\\/g, '/')}`;
                const iconName = `Icon${pascalCase(path.basename(filePath))}`;

                return `export { default as ${iconName} } from '${importPath}';`;
            }),
            ''
        ].join('\n');

        await writeFile(OUTPUT_FILE, exportsContent);
        console.log(`\n🎉 Successfully generated ${processedFiles.length} icon exports in ${OUTPUT_FILE}`);

        // Mostrar estructura de archivos para debugging
        console.log('\n📁 Structure found:');
        const structure = {};
        processedFiles.forEach(filePath => {
            const relativePath = path.relative(ICONS_DIR, filePath);
            const parts = relativePath.split(path.sep);
            const category = parts.length > 1 ? parts[0] : 'root';
            if (!structure[category]) structure[category] = [];
            structure[category].push(path.basename(filePath, '.svg'));
        });

        Object.entries(structure).forEach(([category, icons]) => {
            console.log(`  ${category}: ${icons.length} icons`);
            if (icons.length <= 5) {
                console.log(`    ${icons.join(', ')}`);
            } else {
                console.log(`    ${icons.slice(0, 3).join(', ')}, ... and ${icons.length - 3} more`);
            }
        });

    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

main();