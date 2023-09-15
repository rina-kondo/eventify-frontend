import type { Metadata } from 'next';
import Logo from '@components/common/Logo';
import CustomLink from '@components/common/CustomLink';
import { SignUpForm } from '@components/common/formParts/AuthForm';

export const metadata: Metadata = {
  title: 'アカウント登録 | Eventify',
};

export default function Page() {
  return (
    <>
      <Logo size="large" />
      <SignUpForm />
      <CustomLink href="/sign-in" text="サインインはこちらから" />
    </>
  );
}
