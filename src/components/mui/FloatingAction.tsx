import * as React from 'react';

import Fab from '@mui/material/Fab';
import { ComponentProps } from 'react';

type FavProps = ComponentProps<typeof Fab>;

export default function CustomFloatingAction(props: FavProps) {
  return <Fab {...props}></Fab>;
}
