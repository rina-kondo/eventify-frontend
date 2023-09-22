'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FormProps, ErrorProps, ErrorMessages } from '../types';
import { signUp, validatePassword } from '../logics';

export const useCheckPassword = (formData: FormProps) => {
  const [passwordMatchError, setPasswordMatchError] = useState<boolean>(false);

  useEffect(() => {
    if (formData.passwordConfirm !== undefined) {
      if (!validatePassword(formData.password, formData.passwordConfirm)) {
        setPasswordMatchError(true);
      } else {
        setPasswordMatchError(false);
      }
    }
  }, [formData.password, formData.passwordConfirm]);

  return { passwordMatchError };
};

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
