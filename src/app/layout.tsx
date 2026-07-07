import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
    variable: '--font-space-mono',
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://melenitasdev-masterclass.vercel.app'),
    title: '5 Señales de que tu Código se Va a Convertir en un Infierno',
    description:
        'Aprenderás a detectar las 5 señales de código problemático y solucionarlas con código limpio. Programa más rápido, con más seguridad y abre puertas en el sector profesional.',
    openGraph: {
        title: '5 Señales de que tu Código se Va a Convertir en un Infierno',
        description:
            'Aprenderás a detectar las 5 señales de código problemático y solucionarlas con código limpio. Programa más rápido, con más seguridad y abre puertas en el sector profesional.',
        type: 'website',
        locale: 'es_ES',
        siteName: 'Melenitas Dev',
        url: '/',
    },
    twitter: {
        card: 'summary_large_image',
        title: '5 Señales de que tu Código se Va a Convertir en un Infierno',
        description:
            'Aprenderás a detectar las 5 señales de código problemático y solucionarlas con código limpio. Programa más rápido, con más seguridad y abre puertas en el sector profesional.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
