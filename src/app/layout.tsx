import Providers from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <main className='mx-auto max-w-5xl px-4 py-6'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
