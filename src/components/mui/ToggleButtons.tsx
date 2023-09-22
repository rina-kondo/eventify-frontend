'use client';

import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type ToggleButtonsProps = {
  toggleButtonProps: { value: string; text: string }[];
};

export default function ToggleButtons(toggleButtonProps: ToggleButtonsProps) {
  const [value, setValue] = React.useState<string | null>('left');

  const handleValue = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setValue(newAlignment);
  };

  return (
    <ToggleButtonGroup color="primary" value={value} exclusive onChange={handleValue}>
      {toggleButtonProps.toggleButtonProps.map((prop, index) => (
        <ToggleButton key={index} value={prop.value}>
          {prop.text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
