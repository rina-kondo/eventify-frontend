import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { ContentLayout } from '@/components/layouts/ContentLayout';
import ThemeRegistry from '@/infrastructure/mui/ThemeRegistry';
import { TargetDateContextProvider } from '@/store/target-date';
import { CalenderContextProvider } from '@/store/calender-theme';

export const metadata: Metadata = {
  title: 'Eventify',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <html lang="ja">
        <body>
          <TargetDateContextProvider>
            <CalenderContextProvider>
              <ContentLayout>{children}</ContentLayout>
            </CalenderContextProvider>
          </TargetDateContextProvider>
        </body>
      </html>
    </ThemeRegistry>
  );
}
