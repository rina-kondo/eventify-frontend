'use client';

import { useState, useCallback } from 'react';
import { FormProps } from '../types';

export const useFormChange = () => {
  const [formData, setFormData] = useState<FormProps>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    [setFormData],
  );

  return { formData, handleFormChange };
};
