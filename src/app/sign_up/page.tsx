import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '@styles/objects/projects/auth-form.module.scss';
import logoStyles from '@styles/objects/components/logo.module.scss';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { HiOutlineLockClosed } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'アカウント登録 | Eventify',
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
          <HiOutlineEnvelope />
        </h2>
        <input type="text" className={styles.authForm__input} placeholder="メールアドレス" />
      </label>
      <label className={styles.authForm__label}>
        <h2 className={styles.authForm__icon}>
          <HiOutlineLockClosed />
        </h2>
        <input type="text" className={styles.authForm__input} placeholder="パスワード" />
      </label>
      <label className={styles.authForm__label}>
        <h2 className={styles.authForm__icon}>
          <HiOutlineLockClosed />
        </h2>
        <input type="text" className={styles.authForm__input} placeholder="パスワード(確認)" />
      </label>
      <button className={styles.authForm__submit}>アカウント登録</button>
      <Link className={styles.authForm__link} href="/sign_in">
        サインインはこちらから
      </Link>
    </div>
  );
}
