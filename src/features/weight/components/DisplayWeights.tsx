import { FlatList } from 'react-native';

import { Separator } from '@/components/Layout/Separator';
import { Text } from '@/components/Elements/Text';

import { GetWeightsReturn } from '../hooks/useGetWeights';

import { DisplayWeight } from './DisplayWeight';

type DisplayWeightProp = GetWeightsReturn;
/**
 * TODO: Probably add Skeleton when loading
 */

export const DisplayWeights = ({
  isLoading,
  error,
  weights,
  refetchWeights,
}: DisplayWeightProp) => {
  if (error) return null;
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={weights}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => <DisplayWeight {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
