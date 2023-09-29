import styles from './DayCell.module.scss';

export const DayCell = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.dayCell}>{children}</div>;
};
