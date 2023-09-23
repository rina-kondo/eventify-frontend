import { FormProps } from '../../types';
import { HttpClient } from '@/infrastructure/api/HttpClient';
import { SignInResponse } from '@/features/auth/sign-in/signInModel';

export const signIn = async (formData: FormProps) => {
  return await HttpClient.post<FormProps, { data: SignInResponse }>('auth/login', formData).then((response) => {
    // set cookie
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    document.cookie = `myCookie=${JSON.stringify(response.data)}; expires=${expirationDate.toUTCString()}; path=/`;
  });
};
