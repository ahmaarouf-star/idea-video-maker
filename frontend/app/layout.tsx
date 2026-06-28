import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Idea Video Maker - AI Video Generation',
  description: 'Create stunning videos from scripts, articles, and ideas using AI'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">{children}</body>
    </html>
  );
}
