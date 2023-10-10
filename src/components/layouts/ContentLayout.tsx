import { FooterLayout } from './Footer';
import { HeaderLayout } from './Header';
import { Navbar } from './Navbar';
import styles from './Content.module.scss';

export const ContentLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className={styles.main}>
      <HeaderLayout />
      <div className={styles.contents}>{children}</div>
      <Navbar />
      <FooterLayout />
    </main>
  );
};
