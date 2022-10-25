import { Box } from '@/components/Layout/Box';
import { Button } from '@/components/Elements/Button';
import { useNavigate } from 'react-router-native';

export const AddWeightHeader = () => {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate('/wform');
  };
  return (
    <Box alignItems={'center'} backgroundColor='viewPrimaryBackground' p='s'>
      <Button variant={'inverse'} onPress={handlePress}>
        Add Weight!
      </Button>
    </Box>
  );
};
