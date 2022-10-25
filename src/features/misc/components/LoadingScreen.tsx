import { Loading } from '@/components/Elements/Loading';
import { Text } from '@/components/Elements/Text';
import { Box } from '@/components/Layout/Box';

export const LoadingScreen = () => {
  return (
    <Box justifyContent={'center'} alignItems={'center'} flexDirection='row'>
      <Loading loading size={60} color='grey' />
      <Text>Loading</Text>
    </Box>
  );
};
