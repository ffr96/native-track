import { useGetWeights } from '../hooks/useGetWeights';
import { useAppSelector } from '@/hooks/useStoreState';

import { Box } from '@/components/Layout/Box';
import { DisplayWeights } from '../components/DisplayWeights';

import { MAX_VIEW_HEIGHT } from '@/utils/constants';

export const Weight = () => {
  const user = useAppSelector((state) => state.user);
  const weights = useGetWeights(user);

  return (
    <Box style={{ height: MAX_VIEW_HEIGHT }}>
      <DisplayWeights {...weights} />
    </Box>
  );
};
