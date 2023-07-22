import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '@styles/objects/projects/auth-form.module.scss';
import Logo from '../components/Logo';
import TextForm from '../components/TextForm';
import Button from '../components/Button';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { HiOutlineLockClosed } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'サインイン | Eventify',
};

export default function Page() {
  return (
    <div className={styles.authForm}>
      <Logo size="large" />
      <TextForm Icon={HiOutlineUserCircle} placeholder="ユーザーネーム" />
      <TextForm Icon={HiOutlineLockClosed} placeholder="パスワード" />
      <Button text="サインイン" color="black" />
      <Link className={styles.link} href="/sign_up">
        アカウント登録はこちらから
      </Link>
    </div>
  );
}
