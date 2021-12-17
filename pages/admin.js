import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    // api 디렉토리의 isLogin 값을 받아 온다.
    Axios.get('/api/isLogin').then(res => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        //로그인 안된 상태면 login 페이지로 보낸다.
        router.push('/login');
      }
    });
  }

  function logout() {
    Axios.get('/api/logout').then(res => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      admin
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  );
}
