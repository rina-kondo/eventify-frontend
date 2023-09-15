'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import axios, { AxiosError, AxiosResponse } from 'axios';
import TextForm from '@components/common/formParts/TextForm';
import Button from '@components/common/formParts/Button';
import styles from './AuthForm.module.scss';

type AuthContents = {
  form: { name: string; type: string; placeholder: string }[];
  button: { text: string; onclick: () => void };
};

type FormProps = {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

type Validations = {
  body?: string[];
};

export function AuthForm() {
  const pathname = usePathname();
  const isSignUp = pathname === '/sign-up';

  const [formData, setFormData] = useState<FormProps>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [validations, setValidations] = useState<Validations>({});
  const [passwordMatchError, setPasswordMatchError] = useState<boolean>(false);

  useEffect(() => {
    if (isSignUp && formData.password !== formData.passwordConfirm) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  }, [isSignUp, formData.password, formData.passwordConfirm]);

  const router = useRouter();

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
          const errorMessage = (error.response.data as { message: string }).message;
          console.log(errorMessage);
          return errorMessage;
        } else {
          const errorMessage = 'サーバーとの通信に失敗しました。';
          return errorMessage;
        }
      });
  }

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
    button: isSignUp
      ? { text: 'アカウント登録', onclick: () => postSignUp(formData) }
      : { text: 'ログイン', onclick: () => postSignIn(formData) },
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.authForm}>
        {authContents.form.map((form, index) => (
          <TextForm
            key={index}
            name={form.name}
            type={form.type}
            placeholder={form.placeholder}
            onChange={handleFormChange}
          />
        ))}
        <Button text={authContents.button.text} onclick={authContents.button.onclick} />
        <ul className={styles.validation}>
          {passwordMatchError && <li>パスワードが一致しません。</li>}
          {validations.body &&
            validations.body.map((validation: string, index: number) => <li key={index}>{validation}</li>)}
        </ul>
      </div>
    </>
  );
}
