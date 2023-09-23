'use client';

import { FormProps } from '../types';
import { useSignIn } from '@/features/auth/sign-in/hooks/useSignIn';
import { useSignUp } from '@/features/auth/sign-up/hooks/useSignUp';
import { AuthContents } from '../types';

export const useAuthContents = (isSignUp: boolean, formData: FormProps) => {
  const { signInErrors, postSignIn } = useSignIn();
  const { signUpErrors, postSignUp } = useSignUp();

  const authContents: AuthContents = {
    form: isSignUp
      ? [
          { name: 'name', type: 'text', placeholder: 'ユーザーネーム' },
          { name: 'email', type: 'email', placeholder: 'メールアドレス' },
          { name: 'password', type: 'password', placeholder: 'パスワード' },
          { name: 'passwordConfirm', type: 'password', placeholder: 'パスワード(確認)' },
        ]
      : [
          { name: 'email', type: 'email', placeholder: 'メールアドレス' },
          { name: 'password', type: 'password', placeholder: 'パスワード' },
        ],
    button: {
      text: isSignUp ? 'アカウント登録' : 'ログイン',
      onclick: () => (isSignUp ? postSignUp(formData) : postSignIn(formData)),
    },
  };

  return { authContents, signInErrors, signUpErrors };
};
