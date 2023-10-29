'use client';

import React from 'react';
import Modal from '@mui/material/Modal';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof Modal>;

export const MuiModal = ({ ...props }: P) => {
  return (
    <div>
      <Modal {...props}></Modal>
    </div>
  );
};
