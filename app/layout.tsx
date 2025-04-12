import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agency2',
  description: 'A simple Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css"


import './globals.css'