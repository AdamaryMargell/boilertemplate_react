'use client';
import localFont from 'next/font/local'
import { PrimeReactProvider } from 'primereact/api';


import 'primereact/resources/primereact.min.css';
import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: '../../public/fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-work-sans'
})
  ;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // configurePrimeReactLocale();
  return (
    <html lang="es" className={workSans.className}>
      <body>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html >
  );
}