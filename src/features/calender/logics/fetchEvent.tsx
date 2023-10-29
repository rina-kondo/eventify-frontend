'use client';

import { fetcherWithAuth } from '@/infrastructure/api/HttpClient';
import useSWR from 'swr';
import { getCookie } from '@/utility/clientCookie';
import { EventDataPropsType } from '@/features/calender/types';

export const useFetchEvent = () => {
  type AuthData = {
    accessToken: string;
    userId: string;
  };

  const authData: AuthData = getCookie('authData');
  const userId = authData?.userId;

  const { data, error } = useSWR<EventDataPropsType[], Error>(`/events/user/${userId}`, fetcherWithAuth);

  return {
    eventData: data,
    isLoading: !error && !data,
    isError: error,
  };
};
