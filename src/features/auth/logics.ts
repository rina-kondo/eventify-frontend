import { FormProps } from './types';
import { HttpClient } from '@/infrastructure/api/HttpClient';
import { SignInResponse } from '@/features/auth/sign-in/signInModel';
import { SignUpResponse } from '@/features/auth/sign-up/signUpModel';

export const signIn = async (formData: FormProps) => {
  return await HttpClient.post<FormProps, { data: SignInResponse }>('auth/login', formData).then((response) => {
    // set cookie
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    document.cookie = `myCookie=${JSON.stringify(response.data)}; expires=${expirationDate.toUTCString()}; path=/`;
  });
};

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
