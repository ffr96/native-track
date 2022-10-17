import { NavbarView } from './layout/NavbarView';

import { useLocation } from 'react-router-native';

// State handling
import { useAppSelector } from '@/hooks/useStoreState';
import { PublicNavigation } from './components/PublicNavigation';
import { PrivateNavigation } from './components/PrivateNavigation';

export const NavBar = () => {
  const { pathname } = useLocation();
  const user = useAppSelector((state) => state.user);

  const NavigateTo = user.token ? (
    <PrivateNavigation pathname={pathname} />
  ) : (
    <PublicNavigation pathname={pathname} />
  );

  return <NavbarView>{NavigateTo}</NavbarView>;
};
