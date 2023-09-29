import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ComponentProps } from 'react';

type SelectPropsType = ComponentProps<typeof Select>;
type MenuItemPropsType = ComponentProps<typeof MenuItem>;

export const MuiSelectButton = (props: SelectPropsType) => {
  return (
    <FormControl size="small" sx={{ m: 1, minWidth: 70, paddingX: 2 }}>
      <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} {...props}></Select>
    </FormControl>
  );
};

export const MuiMenuItem = (props: MenuItemPropsType) => {
  return <MenuItem {...props}></MenuItem>;
};
