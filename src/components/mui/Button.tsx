import { Button } from '@mui/material';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof Button>;

export const MuiButton = (props: P) => {
  return <Button size="medium" {...props}></Button>;
};
