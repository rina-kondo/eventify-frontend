import Fab from '@mui/material/Fab';
import { ComponentProps } from 'react';

type FavProps = ComponentProps<typeof Fab>;

export const MuiFloatingAction = (props: FavProps) => {
  return <Fab {...props}></Fab>;
};
