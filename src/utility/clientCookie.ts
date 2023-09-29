'use client';

export function getCookie(name: string) {
  if (typeof window == 'undefined') {
    return;
  }

  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];

  return cookieValue ? JSON.parse(cookieValue) : null;
}

export function setCookie(name: string, value: any) {
  document.cookie = `${name}=${JSON.stringify(value)}; path=/`;
}
