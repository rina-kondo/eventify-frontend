export const generateTimeList = () => {
  const timeList = [];
  for (let hour = 0; hour <= 24; hour++) {
    const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
    timeList.push({ hour: hour, text: `${formattedHour}:00` });
  }
  return timeList;
};
