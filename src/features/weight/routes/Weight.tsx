import { useGetWeights } from '../hooks/useGetWeights';
import { useAppSelector } from '@/hooks/useStoreState';

import { Box } from '@/components/Layout/Box';
import { DisplayWeights } from '../components/DisplayWeights';
import { AddWeightHeader } from '../components/AddWeightHeader';

import { MAX_VIEW_HEIGHT } from '@/utils/constants';

export const Weight = () => {
  const user = useAppSelector((state) => state.user);
  const weights = useGetWeights(user);

  const endReached = () => {
    weights.fetchMore();
  };

  return (
    <Box height={MAX_VIEW_HEIGHT} justifyContent='center'>
      <DisplayWeights
        {...weights}
        endReached={endReached}
        header={<AddWeightHeader />}
      />
    </Box>
  );
};
