'use client';

import { CustomTextField } from '@/components/mui/TextField';
import styles from './AuthForm.module.scss';
import { useCheckPassword } from '@/features/auth/sign-up/hooks/useCheckPassword';
import { useFormChange } from '@/features/auth/hooks/useFormChange';
import { useAuthContents } from '@/features/auth/hooks/useAuthContents';
import { CustomButton } from '@/components/mui/Button';

type AuthFormProps = {
  isSignUp: boolean;
};

export function AuthForm({ isSignUp }: AuthFormProps) {
  const { formData, handleFormChange } = useFormChange();
  const { passwordMatchError } = useCheckPassword(formData);
  const { authContents, signInErrors, signUpErrors } = useAuthContents(isSignUp, formData);
  const errorMessages = isSignUp ? signUpErrors : signInErrors;

  return (
    <>
      <div className={styles.authForm}>
        {authContents.form.map((form, index) => (
          <CustomTextField
            key={index}
            name={form.name}
            label={form.placeholder}
            type={form.type}
            size="small"
            onChange={handleFormChange}
          />
        ))}
        <CustomButton
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => {
            authContents.button.onclick();
          }}
        >
          {authContents.button.text}
        </CustomButton>
        <ul className={styles.validation}>
          {isSignUp ? passwordMatchError && <li>パスワードが一致しません。</li> : undefined}
          {errorMessages.body &&
            errorMessages.body.map((message: string, index: number) => <li key={index}>{message}</li>)}
        </ul>
      </div>
    </>
  );
}
