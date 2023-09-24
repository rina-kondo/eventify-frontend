import { FormProps } from '../../types';
import { HttpClient } from '@/infrastructure/api/HttpClient';
import { SignUpResponse } from '@/features/auth/sign-up/signUpModel';
import { signIn } from '@/features/auth/sign-in/logics/signIn';

export const signUp = async (formData: FormProps) => {
  return await HttpClient.post<FormProps, SignUpResponse>('users', formData).then((response) => {
    const signInForm: FormProps = {
      email: formData.email,
      password: formData.password,
    };
    console.log('signUp ok');
    signIn(signInForm);
  });
};

export const validatePassword = (password: string, passwordConfirm: string) => password === passwordConfirm;
