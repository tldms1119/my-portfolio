// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: process.env.NEXT_PUBLIC_PORTFOLIO_TITLE || "Portfolio",
  description: process.env.NEXT_PUBLIC_PORTFOLIO_DESCRIPTION || 'A showcase of my projects and skills as a full-stack developer.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
