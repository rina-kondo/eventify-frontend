'use client';

import TextForm from '@components/common/formParts/TextForm';
import Button from '@components/common/formParts/Button';
import styles from './AuthForm.module.scss';
import { useFormChange, useCheckPassword, useAuth } from './hook';

type AuthContents = {
  form: { name: string; type: string; placeholder: string }[];
  button: { text: string; onclick: () => void };
};

export function AuthForm() {
  const { formData, handleFormChange } = useFormChange();
  const { isSignUp, postSignUp, postSignIn, validations } = useAuth(formData);
  const { passwordMatchError } = useCheckPassword(isSignUp, formData);

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
