// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vardhaman Carpet - Premium Foam & Furnishings',
  description: 'Your destination for premium foam and furnishings. Discover our exquisite collection designed to elevate your living spaces with comfort and style.',
  keywords: 'carpet, foam, furnishings, mattresses, wallpapers, home decor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}