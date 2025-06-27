'use client';
import "./globals.css";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // configurePrimeReactLocale();
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider value={{ unstyled: true }}>
          {children}
        </PrimeReactProvider>
      </body>
    </html >
  );
}