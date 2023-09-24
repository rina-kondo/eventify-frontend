import { Button } from '@mui/material';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof Button>;

export const CustomButton = (props: P) => {
  return <Button {...props}></Button>;
};
