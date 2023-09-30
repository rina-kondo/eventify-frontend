import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ComponentProps } from 'react';
import { SelectChangeEvent } from '@mui/material';

type SelectPropsType = ComponentProps<typeof Select>;
type MenuItemPropsType = ComponentProps<typeof MenuItem>;
type ThemeSelectButtonProps = {
  selectedValue: string;
  onChange: (event: SelectChangeEvent) => void;
  selectProps: { value: string; text: string }[];
};

const MuiSelectButton = (props: SelectPropsType) => {
  return (
    <FormControl size="small" sx={{ m: 1, minWidth: 70, paddingX: 2 }}>
      <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} {...props}></Select>
    </FormControl>
  );
};

const MuiMenuItem = (props: MenuItemPropsType) => {
  return <MenuItem {...props}></MenuItem>;
};

export const MuiThemeSelectButton: React.FC<ThemeSelectButtonProps> = ({ selectedValue, onChange, selectProps }) => {
  return (
    <MuiSelectButton value={selectedValue} onChange={(event) => onChange(event as SelectChangeEvent)}>
      {selectProps.map((selectProp, index) => (
        <MuiMenuItem key={index} value={selectProp.value}>
          {selectProp.text}
        </MuiMenuItem>
      ))}
    </MuiSelectButton>
  );
};
