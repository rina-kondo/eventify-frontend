import styles from './TimeLine.module.scss';

export function EmptyCell() {
  return (
    <>
      <div className={styles.emptyCellLine}>
        {HOUR_LIST.map((hour) => (
          <div className={styles.emptyCell} key={hour.hour}></div>
        ))}
      </div>
    </>
  );
}

export function TimeLine() {
  return (
    <>
      <div className={styles.timeLine}>
        {TIME_LIST.map((time) => (
          <div className={styles.timeText} key={time.id}>
            {time.time}
          </div>
        ))}
      </div>
    </>
  );
}

const TIME_LIST = [
  { id: 0, time: '00:00' },
  { id: 1, time: '01:00' },
  { id: 2, time: '02:00' },
  { id: 3, time: '03:00' },
  { id: 4, time: '04:00' },
  { id: 5, time: '05:00' },
  { id: 6, time: '06:00' },
  { id: 7, time: '07:00' },
  { id: 8, time: '08:00' },
  { id: 9, time: '09:00' },
  { id: 10, time: '10:00' },
  { id: 11, time: '11:00' },
  { id: 12, time: '12:00' },
  { id: 13, time: '13:00' },
  { id: 14, time: '14:00' },
  { id: 15, time: '15:00' },
  { id: 16, time: '16:00' },
  { id: 17, time: '17:00' },
  { id: 18, time: '18:00' },
  { id: 19, time: '19:00' },
  { id: 20, time: '20:00' },
  { id: 21, time: '21:00' },
  { id: 22, time: '22:00' },
  { id: 23, time: '23:00' },
  { id: 24, time: '24:00' },
];

const HOUR_LIST = [
  { hour: 0 },
  { hour: 1 },
  { hour: 2 },
  { hour: 3 },
  { hour: 4 },
  { hour: 5 },
  { hour: 6 },
  { hour: 7 },
  { hour: 8 },
  { hour: 9 },
  { hour: 10 },
  { hour: 11 },
  { hour: 12 },
  { hour: 13 },
  { hour: 14 },
  { hour: 15 },
  { hour: 16 },
  { hour: 17 },
  { hour: 18 },
  { hour: 19 },
  { hour: 20 },
  { hour: 21 },
  { hour: 22 },
  { hour: 23 },
];