// const fs = require('fs');
// const path = require('path');

// // 1. Resuelve las rutas de manera más robusta
// const PROJECT_ROOT = path.resolve(__dirname, '../');
// const ICONS_DIR = path.join(PROJECT_ROOT, 'src', 'assets', 'icons');
// const OUTPUT_DIR = path.join(PROJECT_ROOT, 'src', 'components', 'XIcons');
// const OUTPUT_FILE = path.join(OUTPUT_DIR, 'index.ts');

// // 2. Crea el directorio de salida si no existe
// if (!fs.existsSync(OUTPUT_DIR)) {
//     fs.mkdirSync(OUTPUT_DIR, { recursive: true });
//     console.log(`📂 Created directory: ${OUTPUT_DIR}`);
// }

// // 3. Función para convertir a PascalCase mejorada
// const pascalCase = (str) => {
//     if (typeof str !== 'string') {
//         throw new Error('Input must be a string');
//     }
//     return str
//         .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
//         .replace(/[^a-zA-Z0-9]+/g, ' ')
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join('');
// };

// try {
//     // 4. Lee los archivos SVG con manejo de errores
//     if (!fs.existsSync(ICONS_DIR)) {
//         throw new Error(`Icons directory not found: ${ICONS_DIR}`);
//     }

//     const files = fs.readdirSync(ICONS_DIR);
//     const svgFiles = files.filter(file => file.endsWith('.svg'));

//     if (svgFiles.length === 0) {
//         console.warn('⚠️ No SVG files found in icons directory');
//     }

//     // 5. Genera el contenido del archivo index.ts
//     const content = [
//         '// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY',
//         '// Este archivo se genera automáticamente, no lo edites directamente\n',
//         ...svgFiles.map(file => {
//             const iconName = pascalCase(file.replace('.svg', ''));
//             return `export { default as Icon${iconName} } from "@/assets/icons/${file}";`;
//         }),
//         ''
//     ].join('\n');

//     // 6. Escribe el archivo de salida
//     fs.writeFileSync(OUTPUT_FILE, content);
//     console.log(`✅ Successfully generated ${svgFiles.length} icon exports in ${OUTPUT_FILE}`);

// } catch (error) {
//     console.error('❌ Error generating icons:', error.message);
//     process.exit(1);
// }


const fs = require('fs');
const path = require('path');

// Configuración de rutas
const PROJECT_ROOT = path.resolve(__dirname, '../');
const ICONS_DIR = path.join(PROJECT_ROOT, 'src', 'assets', 'icons');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'src', 'components', 'XIcons');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'index.ts');

// Función para procesar SVG
const processSVG = (content) => {
    return content
        .replace(/fill="[^"]*"/g, '')
        .replace(/<svg([^>]*)>/, '<svg$1 fill="currentColor">')
        .replace(/stroke="[^"]*"/g, '');
};

// Función PascalCase mejorada
const pascalCase = (str) => {
    if (typeof str !== 'string') throw new Error('Input must be a string');
    return str
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
};

// Crear directorio si no existe
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created directory: ${OUTPUT_DIR}`);
}

try {
    // Verificar directorio de íconos
    if (!fs.existsSync(ICONS_DIR)) {
        throw new Error(`Icons directory not found: ${ICONS_DIR}`);
    }

    const files = fs.readdirSync(ICONS_DIR);
    const svgFiles = files.filter(file => file.endsWith('.svg'));

    if (svgFiles.length === 0) {
        console.warn('No SVG files found in icons directory');
    }

    // Procesar cada archivo SVG
    svgFiles.forEach(file => {
        const filePath = path.join(ICONS_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Solo procesar si no tiene currentColor
        if (!content.includes('currentColor')) {
            const processedContent = processSVG(content);
            fs.writeFileSync(filePath, processedContent);
            console.log(` Processed ${file}`);
        }
    });

    // Generar archivo index.ts
    const exportsContent = [
        '// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY',
        '// Este archivo se genera automáticamente, no lo edites directamente\n',
        ...svgFiles.map(file => {
            const iconName = pascalCase(file.replace('.svg', ''));
            return `export { default as Icon${iconName} } from "@/assets/icons/${file}";`;
        }),
        ''
    ].join('\n');

    fs.writeFileSync(OUTPUT_FILE, exportsContent);
    console.log(`Successfully generated ${svgFiles.length} icon exports in ${OUTPUT_FILE}`);

} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}