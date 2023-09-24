import type { Metadata } from 'next';
import Logo from '@/components/atoms/Logo';
import CustomLink from '@/components/atoms/CustomLink';
import { AuthForm } from '@/features/auth/components/AuthForm';

export const metadata: Metadata = {
  title: 'サインイン | Eventify',
};

export default function Page() {
  return (
    <>
      <Logo size="large" />
      <AuthForm isSignUp={false} />
      <CustomLink href="/sign-up">アカウント登録はこちらから</CustomLink>
    </>
  );
}
