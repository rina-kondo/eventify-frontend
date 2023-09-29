import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { ContentLayout } from '@/components/layouts/ContentLayout';
import ThemeRegistry from '@/infrastructure/mui/ThemeRegistry';
import { TargetDayContextProvider } from '@/store/target-day';
import { TargetMonthContextProvider } from '@/store/target-month';
import { TargetYearContextProvider } from '@/store/target-year';
import { CalenderContextProvider } from '@/store/calender-theme';

export const metadata: Metadata = {
  title: 'Eventify',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <html lang="ja">
        <body>
          <TargetYearContextProvider>
            <TargetMonthContextProvider>
              <TargetDayContextProvider>
                <CalenderContextProvider>
                  <ContentLayout>{children}</ContentLayout>
                </CalenderContextProvider>
              </TargetDayContextProvider>
            </TargetMonthContextProvider>
          </TargetYearContextProvider>
        </body>
      </html>
    </ThemeRegistry>
  );
}
