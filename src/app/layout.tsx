import type { Metadata } from 'next';
import './globals.css';
import { outfitFont } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'CS2 Calls',
    description: 'Stop noobing around',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={outfitFont.className}>{children}</body>
        </html>
    );
}
