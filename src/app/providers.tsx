'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import StoreProvider from './StoreProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <AntdRegistry>{children}</AntdRegistry>
    </StoreProvider>
  );
}
