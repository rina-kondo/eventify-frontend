import type { Metadata } from 'next';
import { Logo } from '@/components/atoms/Logo';
import { CustomLink } from '@/components/atoms/CustomLink';
import { AuthForm } from '@/features/auth/components/AuthForm';

export const metadata: Metadata = {
  title: 'アカウント登録 | Eventify',
};

export default function Page() {
  return (
    <>
      <Logo size="large" />
      <AuthForm isSignUp={true} />
      <CustomLink href="/sign-in">サインインはこちらから</CustomLink>
    </>
  );
}
