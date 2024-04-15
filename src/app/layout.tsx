import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Components',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Dropdown',
      route: '/dropdown',
    },
    {
      label: 'Carousel',
      route: '/carousel',
    },
    {
      label: 'Search',
      route: '/search',
    },
    {
      label: 'Button',
      route: '/button',
    },
    {
      label: 'ButtonGroup',
      route: '/buttonGroup',
    },
  ];

  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav
          className='
        inline-block 
        items-center
        m-4
      '
        >
          <ul>
            {links.map(({ label, route }) => (
              <li
                key={route}
                className='bg-slate-300 rounded-md text-gray-700 p-2 w-32 m-2'
              >
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className='flex justify-center p-2'>{children}</section>
      </body>
    </html>
  );
}
