import { FormProps } from '../../types';
import { HttpClient } from '@/infrastructure/api/HttpClient';
import { SignInResponse } from '@/features/auth/sign-in/signInModel';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

const calenderSetting = {
  theme: 'month',
  targetDate: dayjs().date(),
  targetMonth: dayjs().month(),
  targetYear: dayjs().year(),
};

export const signIn = async (formData: FormProps) => {
  return await HttpClient.post<FormProps, { data: SignInResponse }>('auth/login', formData).then((response) => {
    // set cookie: ログイン情報の登録
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    document.cookie = `authData=${JSON.stringify(response.data)}; expires=${expirationDate.toUTCString()}; path=/`;
    // set cookie: カレンダー設定(デフォルト)の登録
    document.cookie = `calenderSettings=${JSON.stringify(calenderSetting)}; path=/`;
  });
};
