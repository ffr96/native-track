import { Text } from '@/components/Elements/Text';
import { Box } from '@/components/Layout/Box';
import { Displaylogs } from '@/features/logs';

import { useGetLogs } from '@/features/logs/hooks/useGetLogs';
import { DisplayWeights } from '@/features/weight/components/DisplayWeights';
import { useGetWeights } from '@/features/weight/hooks/useGetWeights';
import { useAppSelector } from '@/hooks/useStoreState';
import { MAX_VIEW_HEIGHT } from '@/utils/constants';

export const Overview = () => {
  const user = useAppSelector((state) => state.user);
  const logs = useGetLogs(user, 0);
  const weights = useGetWeights(user, 0);
  return (
    <Box height={MAX_VIEW_HEIGHT} backgroundColor='viewOrangeDetails'>
      <Text variant={'header4'} py='l' px='s'>
        Last Training Entries:
      </Text>
      <Displaylogs {...logs} />
      <Text variant={'header4'} py='l' px='s'>
        Last Weight Entries:{' '}
      </Text>
      <DisplayWeights {...weights} />
    </Box>
  );
};
