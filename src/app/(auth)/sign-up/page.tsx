import type { Metadata } from 'next';
import Logo from '@components/common/Logo';
import CustomLink from '@components/common/CustomLink';
import { AuthForm } from '../AuthForm';

export const metadata: Metadata = {
  title: 'アカウント登録 | Eventify',
};

export default function Page() {
  return (
    <>
      <Logo size="large" />
      <AuthForm />
      <CustomLink href="/sign-in" text="サインインはこちらから" />
    </>
  );
}
