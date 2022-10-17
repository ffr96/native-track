import { FlatList } from 'react-native';

import { Separator } from '@/components/Layout/Separator';
import { Text } from '@/components/Elements/Text';

import { useAppSelector } from '@/hooks/useStoreState';
import { useGetWeights } from '../hooks/useGetWeights';

import { DisplayWeight } from './DisplayWeight';

/**
 * TODO: Probably add Skeleton when loading
 */

export const DisplayWeights = () => {
  const user = useAppSelector((state) => state.user);
  const { weight, isLoading } = useGetWeights(user);

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={weight}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => <DisplayWeight {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
