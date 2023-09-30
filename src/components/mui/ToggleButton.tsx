import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ComponentProps } from 'react';

type ToggleButtonProps = ComponentProps<typeof ToggleButton>;

export const MuiToggleButtons = (props: ToggleButtonProps) => {
  return <ToggleButton {...props}></ToggleButton>;
};

type ToggleButtonGroupProps = ComponentProps<typeof ToggleButtonGroup>;

export const MuiToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  return <ToggleButtonGroup size="small" {...props}></ToggleButtonGroup>;
};
