import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Jelle Schutter',
  description: 'Welcome to my personal website!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
        <footer>Jelle Schutter &copy; 2024</footer>
        <script
          defer
          data-domain="jelle.schutter.xyz"
          data-api="/api/event"
          src="/js/script.js"
        ></script>
      </body>
    </html>
  );
}
