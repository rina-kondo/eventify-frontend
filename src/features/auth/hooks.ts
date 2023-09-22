'use client';

import { useState, useCallback, useEffect } from 'react';
import { FormProps } from './types';
import { useSignIn } from '@/features/auth/sign-in/hooks';
import { useSignUp } from '@/features/auth/sign-up/hooks';
import { AuthContents } from './types';

export const useFormChange = () => {
  const [formData, setFormData] = useState<FormProps>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    [setFormData],
  );

  return { formData, handleFormChange };
};

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
