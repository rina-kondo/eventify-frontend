import Link from 'next/link';
import type { Metadata } from 'next';
import styles from '../page.module.scss';
import Logo from '@components/common/Logo';
import TextForm from '@components/common/TextForm';
import Button from '@components/common/Button';

export const metadata: Metadata = {
  title: 'アカウント登録 | Eventify',
};

export default function Page() {
  return (
    <div className={styles.authForm}>
      <Logo size="large" />
      <TextForm placeholder="ユーザーネーム" />
      <TextForm placeholder="メールアドレス" />
      <TextForm placeholder="パスワード" />
      <TextForm placeholder="パスワード(確認)" />
      <Button text="アカウント登録" color="black" />
      <Link className={styles.link} href="/sign-in">
        サインインはこちらから
      </Link>
    </div>
  );
}
