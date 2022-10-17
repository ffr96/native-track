import { Text } from '@/components/Elements/Text';
import { Link } from 'react-router-native';

export const PublicNavigation = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <Link underlayColor={'none'} to='/'>
        <Text fontWeight={pathname === '/' ? 'bold' : '400'}>Login</Text>
      </Link>
      <Link underlayColor={'none'} to='/register'>
        <Text fontWeight={pathname === '/register' ? 'bold' : '400'}>
          Register
        </Text>
      </Link>
    </>
  );
};
