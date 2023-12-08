import { useEffect } from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const test = 'test';
  // runs once on component/page load
  useEffect(() => {
    if (!Auth.loggedIn()) {
      console.log(test);
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
