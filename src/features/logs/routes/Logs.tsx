import { Box } from '@/components/Layout/Box';
import { ErrorFetching } from '@/features/misc/components/ErrorFetching';
import { useAppSelector } from '@/hooks/useStoreState';
import { Displaylogs } from '../components/DisplayLogs';
import { useGetLogs } from '../hooks/useGetLogs';

export const Logs = () => {
  const user = useAppSelector((state) => state.user);
  const logs = useGetLogs(user);

  return (
    <Box style={{ height: '84%' }} justifyContent='center' width={'100%'}>
      <Displaylogs {...logs} />
      <ErrorFetching error={logs.error} refetchLogs={logs.refetchLogs} />
    </Box>
  );
};
