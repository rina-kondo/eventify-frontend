'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormProps, ErrorProps, ErrorMessages } from '../../types';
import { signIn } from '../logics/signIn';

export const useSignIn = () => {
  const router = useRouter();
  const [signInErrors, setSignInErrors] = useState<ErrorMessages>({});

  const postSignIn = async (formData: FormProps) => {
    setSignInErrors({});
    try {
      await signIn(formData);
      router.push('/');
    } catch (e: any) {
      console.log(e.response);
      if (e.response?.status === 400 || e.response?.status === 404 || e.response?.status === 401) {
        const errorMessage = (e.response.data as ErrorProps).message;
        setSignInErrors({ body: errorMessage });
      } else {
        setSignInErrors({ body: ['サーバーとの通信に失敗しました。'] });
      }
    }
  };

  return {
    signInErrors,
    postSignIn,
  };
};
