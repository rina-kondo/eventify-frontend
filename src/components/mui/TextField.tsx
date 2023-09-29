import { TextField } from '@mui/material';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof TextField>;

export const MuiTextField = (props: P) => {
  return <TextField {...props} />;
};
