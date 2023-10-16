import { getCookie } from '@/utility/clientCookie';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { HttpClientWithAuth } from '@/infrastructure/api/HttpClient';

export function useCheckTokenValidity() {
  const router = useRouter();
  const [isTokenValid, setIsTokenValid] = useState(false);
  const pathname = usePathname();
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up';

  useEffect(() => {
    const authData = getCookie('authData');
    if (authData && !isAuthPage) {
      HttpClientWithAuth.get(`users/${authData.userId}`)
        .then((response) => {
          setIsTokenValid(true);
        })
        .catch((error) => {
          setIsTokenValid(false);
          router.push('/sign-in');
        });
    } else {
      setIsTokenValid(false);
      console.log('fetching token failed');
    }
  }, [isAuthPage, router]);

  return isTokenValid;
}
