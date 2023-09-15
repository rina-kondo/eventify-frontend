'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError, AxiosResponse } from 'axios';
import TextForm from '@components/common/formParts/TextForm';
import Button from '@components/common/formParts/Button';
import styles from './AuthForm.module.scss';

type SignInFormProps = {
  email: string;
  password: string;
};

type SignUoFormProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type validations = {
  body?: string[];
};

export function SignInForm() {
  const [signInForm, setSignInForm] = useState<SignInFormProps>({
    email: '',
    password: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prevSignInForm) => ({
      ...prevSignInForm,
      [e.target.name]: e.target.value,
    }));
  };

  const [validations, setValidations] = useState<validations>({});

  const router = useRouter();

  function postSignIn(signInForm: SignInFormProps) {
    setValidations({});
    axios
      .post('http://localhost:3000/auth/login', signInForm)
      .then((response: AxiosResponse) => {
        localStorage.setItem('auth-data', JSON.stringify(response.data));

        // set cookie
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        document.cookie = `myCookie=${JSON.stringify(response.data)}; expires=${expirationDate.toUTCString()}; path=/`;

        router.push('/');
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          const errorMessage = (error.response.data as { message: string[] }).message;
          setValidations({ body: errorMessage });
        } else {
          const errorMessage = 'サーバーとの通信に失敗しました。';
          setValidations({ body: [errorMessage] });
        }
      });
  }

  return (
    <>
      <div className={styles.authForm}>
        <TextForm name="email" type="email" placeholder="メールアドレス" onChange={handleFormChange} />
        <TextForm name="password" type="password" placeholder="パスワード" onChange={handleFormChange} />
        <Button text="サインイン" color="black" onclick={() => postSignIn(signInForm)} />
        <ul className={styles.validation}>
          {validations.body &&
            validations.body.map((validation: string, index: number) => <li key={index}>{validation}</li>)}
        </ul>
      </div>
    </>
  );
}

export function SignUpForm() {
  const [signUpForm, setSignUpForm] = useState<SignUoFormProps>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [validations, setValidations] = useState<validations>({});
  const [passwordMatchError, setPasswordMatchError] = useState<boolean>(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prevSignUpForm) => ({
      ...prevSignUpForm,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (signUpForm.password !== signUpForm.passwordConfirm) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
  }, [signUpForm.password, signUpForm.passwordConfirm]);

  const postSignUp = (signUpForm: SignUoFormProps) => {
    if (signUpForm.password !== signUpForm.passwordConfirm) {
      return;
    }
    setValidations({});
    axios
      .post('http://localhost:3000/users', signUpForm)
      .then((response: AxiosResponse) => {
        console.log(JSON.stringify(response.data));
        const signInForm: SignInFormProps = {
          email: signUpForm.email,
          password: signUpForm.password,
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

  const router = useRouter();

  function postSignIn(signInForm: SignInFormProps) {
    axios
      .post('http://localhost:3000/auth/login', signInForm)
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

  return (
    <>
      <div className={styles.authForm}>
        <TextForm name="name" type="text" placeholder="ユーザーネーム" onChange={handleFormChange} />
        <TextForm name="email" type="email" placeholder="メールアドレス" onChange={handleFormChange} />
        <TextForm name="password" type="password" placeholder="パスワード" onChange={handleFormChange} />
        <TextForm name="passwordConfirm" type="password" placeholder="パスワード(確認)" onChange={handleFormChange} />
        <Button text="アカウント登録" color="black" onclick={() => postSignUp(signUpForm)} />
        <ul className={styles.validation}>
          {passwordMatchError && <li>パスワードが一致しません。</li>}
          {validations.body &&
            validations.body.map((validation: string, index: number) => <li key={index}>{validation}</li>)}
        </ul>
      </div>
    </>
  );
}
