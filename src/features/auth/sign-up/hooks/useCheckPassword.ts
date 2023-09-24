'use client';

import { useState, useEffect } from 'react';
import { FormProps } from '../../types';
import { validatePassword } from '../logics/validatePassword';

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
