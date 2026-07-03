import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AntdRegistry>
          <main className='mx-auto max-w-5xl px-4 py-6'>{children}</main>
        </AntdRegistry>
      </body>
    </html>
  );
}
