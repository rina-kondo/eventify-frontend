import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof ToggleButton>;

export default function CustomToggleButtons(props: P) {
  return <ToggleButton {...props} sx={{ padding: '0 20px' }}></ToggleButton>;
}
