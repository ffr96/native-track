import { FlatList } from 'react-native';
import { DisplayLog } from './DisplayLog';

import { Separator } from '@/components/Layout/Separator';
import { Text } from '@/components/Elements/Text';
import { GetLogsReturn } from '../hooks/useGetLogs';

type DisplayLogsProp = GetLogsReturn;

/**
 * TODO: Probably add Skeleton when loading
 */

export const Displaylogs = ({
  isLoading,
  error,
  logs,
  refetchLogs,
}: DisplayLogsProp) => {
  if (error) return null;
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={logs}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => <DisplayLog {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
