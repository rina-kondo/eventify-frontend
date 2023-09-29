'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import { usePathname } from 'next/navigation';
import { LuUserCircle, LuList, LuCalendar } from 'react-icons/lu';

export const Navbar = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up';
  const navLinks = [
    { href: '/sign-in', text: 'アカウント', icon: LuUserCircle },
    { href: '/', text: 'カレンダー', icon: LuCalendar },
    { href: '/', text: '予定リスト', icon: LuList },
  ];

  if (!isAuthPage) {
    return (
      <>
        <div className={styles.navbar}>
          <ul className={styles.navList}>
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li className={styles.navItem} key={index}>
                  <Link href={link.href}>
                    <link.icon className={`${styles.navIcon} ${isActive ? styles.active : styles.inactive}`} />
                    <div className={isActive ? styles.active : styles.inactive}>{link.text}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
};
