import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/Layout/header';
import { CartProvider } from '../context/CartContext';
import Footer from '../components/Layout/footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Bake o Clock',
    description: 'Bake o Clock official website!'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <head>
                <link rel='shortcut icon' href='/images/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='bakeoclocl-logo.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='bakeoclock-logo.png'
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen flex flex-col`}
            >
                <CartProvider>
                    <Header />
                    <main className='flex-1'>{children}</main>
                </CartProvider>
                <Footer />
            </body>
        </html>
    );
}
