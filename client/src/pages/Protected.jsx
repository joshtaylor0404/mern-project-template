import { useAuthRedirect } from '../utils/hooks';

export const Protected = () => {
  useAuthRedirect();

  return <div>This is the test page</div>;
};
