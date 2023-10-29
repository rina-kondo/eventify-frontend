import Input from '@mui/material/Input';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof Input>;

export const MuiInput = (props: P) => {
  return <Input {...props} />;
};
