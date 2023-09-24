import * as React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ComponentProps } from 'react';

type P = ComponentProps<typeof ToggleButtonGroup>;

export default function CustomToggleButtonGroup(props: P) {
  return <ToggleButtonGroup size="small" {...props} sx={{ padding: '0 20px' }}></ToggleButtonGroup>;
}
