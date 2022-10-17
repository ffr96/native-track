import { Link } from 'react-router-native';
import { Text } from '@/components/Elements/Text';
import { TouchableHighlight } from 'react-native';

import { removeUser } from '@/features/auth/userSlice';
import { useDispatch } from 'react-redux';
import { storage } from '@/utils/storage';

export const PrivateNavigation = ({ pathname }: { pathname: string }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    void storage.removeItem();
    dispatch(removeUser());
  };
  return (
    <>
      <Link underlayColor={'none'} to='/'>
        <Text fontWeight={pathname === '/' ? 'bold' : '400'}>Home</Text>
      </Link>
      <Link underlayColor={'none'} to='/log'>
        <Text fontWeight={pathname === '/log' ? 'bold' : '400'}>Logs</Text>
      </Link>
      <Link underlayColor={'none'} to='/weight'>
        <Text fontWeight={pathname === '/weight' ? 'bold' : '400'}>Weight</Text>
      </Link>
      <TouchableHighlight onPress={handleLogout}>
        <Text>Log Out</Text>
      </TouchableHighlight>
    </>
  );
};
