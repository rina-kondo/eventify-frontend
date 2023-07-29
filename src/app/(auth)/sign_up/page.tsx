import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../page.module.scss';
import Logo from '@common/Logo';
import TextForm from '@common/TextForm';
import Button from '@common/Button';
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
