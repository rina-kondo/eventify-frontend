import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '@styles/objects/projects/auth-form.module.scss';
import logoStyles from '@styles/objects/components/logo.module.scss';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { HiOutlineLockClosed } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'サインイン | Eventify',
};

export default function Page() {
  return (
    <div className={styles.authForm}>
      <div className={`${logoStyles['logo--l']} ${styles.authForm__logo}`}>Eventify</div>
      <label className={styles.authForm__label}>
        <h2 className={styles.authForm__icon}>
          <HiOutlineUserCircle />
        </h2>
        <input type="text" className={styles.authForm__input} placeholder="ユーザーネーム" />
      </label>
      <label className={styles.authForm__label}>
        <h2 className={styles.authForm__icon}>
          <HiOutlineLockClosed />
        </h2>
        <input type="text" className={styles.authForm__input} placeholder="パスワード" />
      </label>
      <button className={styles.authForm__submit}>サインイン</button>
      <Link className={styles.authForm__link} href="/sign_up">
        アカウント登録はこちらから
      </Link>
    </div>
  );
}
