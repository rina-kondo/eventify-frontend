'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import axios, { AxiosError, AxiosResponse } from 'axios';

type FormProps = {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

type Validations = {
  body?: string[];
};

export const useFormChange = () => {
  const [formData, setFormData] = useState<FormProps>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { formData, handleFormChange };
};

export const useCheckPassword = (isSignUp: boolean, formData: FormProps) => {
  const [passwordMatchError, setPasswordMatchError] = useState<boolean>(false);

  useEffect(() => {
    if (isSignUp && formData.password !== formData.passwordConfirm) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  }, [isSignUp, formData.password, formData.passwordConfirm]);

  return { passwordMatchError };
};

export const useAuth = (formData: FormProps) => {
  const pathname = usePathname();
  const isSignUp = pathname === '/sign-up';

  const router = useRouter();
  const [validations, setValidations] = useState<Validations>({});

  const postSignUp = (formData: FormProps) => {
    if (formData.password !== formData.passwordConfirm) {
      return;
    }
    setValidations({});
    axios
      .post('http://localhost:3000/users', formData)
      .then((response: AxiosResponse) => {
        console.log(JSON.stringify(response.data));
        const signInForm: FormProps = {
          email: formData.email,
          password: formData.password,
        };
        postSignIn(signInForm);
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 400) {
          const errorMessage = (error.response.data as { message: string[] }).message;
          setValidations({ body: errorMessage });
          return;
        } else {
          const errorMessage = 'サーバーとの通信に失敗しました。';
          setValidations({ body: [errorMessage] });
          return;
        }
      });
  };

  function postSignIn(formData: FormProps) {
    axios
      .post('http://localhost:3000/auth/login', formData)
      .then((response: AxiosResponse) => {
        localStorage.setItem('auth-data', JSON.stringify(response.data));

        // set cookie
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        document.cookie = `myCookie=${JSON.stringify(response.data)}; expires=${expirationDate.toUTCString()}; path=/`;

        router.push('/');
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 400) {
          const errorMessage = (error.response.data as { message: string[] }).message;
          setValidations({ body: errorMessage });
          return errorMessage;
        } else {
          const errorMessage = 'サーバーとの通信に失敗しました。';
          setValidations({ body: [errorMessage] });
        }
      });
  }

  return {
    isSignUp,
    validations,
    postSignUp,
    postSignIn,
  };
};
