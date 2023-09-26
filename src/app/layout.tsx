import '@/styles/globals.scss';
import type { Metadata } from 'next';
import ContentLayout from '@/components/layouts/ContentLayout';
import ThemeRegistry from '@/infrastructure/mui/ThemeRegistry';
import { TargetDayContextProvider } from '@/infrastructure/context/target-day';
import { TargetMonthContextProvider } from '@/infrastructure/context/target-month';
import { TargetYearContextProvider } from '@/infrastructure/context/target-year';
import { CalenderContextProvider } from '@/infrastructure/context/calender-theme';

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
