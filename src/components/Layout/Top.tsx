import { TOP_VIEW_HEIGHT } from '@/utils/constants';
import { Box } from './Box';

export const Top = () => {
  return (
    <Box
      height={TOP_VIEW_HEIGHT}
      backgroundColor='viewPrimaryBackground'
      borderBottomColor={'viewOrangeDetails'}
    />
  );
};
