'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormProps, ErrorProps, ErrorMessages } from '../../types';
import { signUp } from '../logics/signUp';
import { validatePassword } from '../logics/validatePassword';

export const useSignUp = () => {
  const router = useRouter();
  const [signUpErrors, setSignUpErrors] = useState<ErrorMessages>({});

  const postSignUp = async (formData: FormProps) => {
    if (formData.passwordConfirm && !validatePassword(formData.password, formData.passwordConfirm)) {
      return;
    }

    setSignUpErrors({});
    try {
      await signUp(formData);
      router.push('/');
    } catch (e: any) {
      if (e.response?.status === 400 || e.response?.status === 409) {
        const errorMessage = (e.response.data as ErrorProps).message;
        setSignUpErrors({ body: errorMessage });
      } else {
        setSignUpErrors({ body: ['サーバーとの通信に失敗しました。'] });
      }
    }
  };

  return {
    signUpErrors,
    postSignUp,
  };
};
