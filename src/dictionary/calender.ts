type StringProps = {
  [key: string]: string;
};

export const calenderThemeDict: StringProps = {
  day: '日',
  week: '週',
  month: '月',
};

export const dayjsFormats: StringProps = {
  day: 'D', // like "1"
  year: 'YYYY', // like "2021"
  month: 'M', // like "1"
  weekdayNum: 'd', // like "1"

  yearText: 'YYYY年', // like "2021年" (locate: ja)
  monthShortText: 'MMM', // like "1月" (locate: ja), "Jan" (locate: en)
  monthLongText: 'MMMM', // like "1月" (locate: ja), "January" (locate: en)
  weekdayShortText: 'ddd', // like "土" (locate: ja)
  weekdayLongText: 'dddd', // like "土曜日" (locate: ja)

  dateHeader: 'DD/MM/YYYY', // like "01/01/2021"
};
