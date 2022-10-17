import Private from './private';
import Public from './public';

import { User } from '../types/user';
import { useAuth } from '../features/auth/hooks/useAuth';

/**
 * Use the routes based on whether the user is signed in or not.
 */

export const AppRoutes = () => {
  const user: User = useAuth();

  if (user?.token) return <Private />;
  return <Public />;
};
