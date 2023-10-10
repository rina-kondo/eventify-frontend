import React from 'react';
import { MuiButton } from '@/components/mui/Button';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from './PeriodControlButton.module.scss';

type PeriodControlButtonProps = {
  handleIncrementTargetDate: () => void;
  handleDecrementTargetDate: () => void;
  handleSetTargetToday: () => void;
};

export const PeriodControlButton: React.FC<PeriodControlButtonProps> = ({
  handleIncrementTargetDate,
  handleDecrementTargetDate,
  handleSetTargetToday,
}) => {
  return (
    <div className={styles.selectThemeButtons}>
      <MuiButton disableElevation variant="contained" sx={{ height: 41.43 }} onClick={handleDecrementTargetDate}>
        <GoChevronLeft />
      </MuiButton>
      <MuiButton disableElevation variant="contained" sx={{ height: 41.43 }} onClick={handleSetTargetToday}>
        今日
      </MuiButton>
      <MuiButton disableElevation variant="contained" sx={{ height: 41.43 }} onClick={handleIncrementTargetDate}>
        <GoChevronRight />
      </MuiButton>
    </div>
  );
};
