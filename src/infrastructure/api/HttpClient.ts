import axios from 'axios';
import { getCookie } from '@/utility/clientCookie';

export const HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

type AuthData = {
  accessToken: string;
  userId: string;
};

const authData: AuthData = getCookie('authData');
const accessToken = authData?.accessToken;

export const HttpClientWithAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken || ''}`,
  },
});

export const fetcher = (url: string) => HttpClient.get(url).then((res) => res.data);
export const fetcherWithAuth = (url: string) => HttpClientWithAuth.get(url).then((res) => res.data);
