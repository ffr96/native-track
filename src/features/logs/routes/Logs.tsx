import { Displaylogs } from '../components/DisplayLogs';
import { Box } from '@/components/Layout/Box';
import { ErrorFetching } from '@/features/misc/components/ErrorFetching';

import { useAppSelector } from '@/hooks/useStoreState';
import { useGetLogs } from '../hooks/useGetLogs';
import { MAX_VIEW_HEIGHT } from '@/utils/constants';

export const Logs = () => {
  const user = useAppSelector((state) => state.user);
  const logs = useGetLogs(user);

  return (
    <Box height={MAX_VIEW_HEIGHT} justifyContent='center' width={'100%'}>
      <Displaylogs {...logs} />
      <ErrorFetching error={logs.error} refetchLogs={logs.refetchLogs} />
    </Box>
  );
};
