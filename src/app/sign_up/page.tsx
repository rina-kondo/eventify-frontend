import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '@styles/objects/projects/auth-form.module.scss';
import Logo from '../components/Logo';
import TextForm from '../components/TextForm';
import Button from '../components/Button';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { HiOutlineLockClosed } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'アカウント登録 | Eventify',
};

export default function Page() {
  return (
    <div className={styles.authForm}>
      <Logo size="large" />
      <TextForm Icon={HiOutlineUserCircle} placeholder="ユーザーネーム" />
      <TextForm Icon={HiOutlineEnvelope} placeholder="メールアドレス" />
      <TextForm Icon={HiOutlineLockClosed} placeholder="パスワード" />
      <TextForm Icon={HiOutlineLockClosed} placeholder="パスワード(確認)" />
      <Button text="アカウント登録" color="black" />
      <Link className={styles.authForm__link} href="/sign_in">
        サインインはこちらから
      </Link>
    </div>
  );
}
