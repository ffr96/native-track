import { Box } from '@/components/Layout/Box';
import { Text } from '@/components/Elements/Text';
import { GetLogsReturn } from '@/features/logs/hooks/useGetLogs';
import { Button } from '@/components/Elements/Button';

type ErrorProps = Omit<GetLogsReturn, 'logs' | 'isLoading'>;

export const ErrorFetching = ({ error, refetchLogs }: ErrorProps) => {
  if (!error) return null;

  return (
    <Box alignItems={'center'}>
      <Text variant={'header3'} textAlign='center'>
        Something came up while trying to get this data!
      </Text>
      <Button onPress={refetchLogs}>Try Again</Button>
    </Box>
  );
};
