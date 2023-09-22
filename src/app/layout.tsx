import '@/styles/globals.scss';
import type { Metadata } from 'next';
import ContentLayout from '@/components/layouts/ContentLayout';
import ThemeRegistry from '@/infrastructure/mui/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Eventify',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <html lang="ja">
        <body>
          <ContentLayout>{children}</ContentLayout>
        </body>
      </html>
    </ThemeRegistry>
  );
}
