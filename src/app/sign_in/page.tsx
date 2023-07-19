import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '@styles/objects/projects/auth-form.module.scss';
import { FaRegCircleUser } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'アカウント登録 | Eventify',
};

export default function Page() {
  return (
    <div className={styles.authForm}>
      <h1>Eventify</h1>
      <label className={styles.authForm__label}>
        <FaRegCircleUser className={styles.authForm__icon} />
        <input type="text" className={styles.authForm__input} placeholder="ユーザーネーム" />
      </label>
      <Link href="">アカウント登録はこちらから</Link>
    </div>
  );
}
