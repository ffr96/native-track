import { FlatList } from 'react-native';

import { Separator } from '@/components/Layout/Separator';

import { GetWeightsReturn } from '../hooks/useGetWeights';

import { DisplayWeight } from './DisplayWeight';
import { LoadingScreen } from '@/features/misc/components/LoadingScreen';

type DisplayWeightProp = GetWeightsReturn & {
  endReached?: () => void;
  header?: JSX.Element;
};
/**
 * TODO: Probably add Skeleton when loading
 */

export const DisplayWeights = ({
  isLoading,
  error,
  weights,
  header,
  endReached,
}: DisplayWeightProp) => {
  if (error) return null;
  if (isLoading) return <LoadingScreen />;

  return (
    <FlatList
      data={weights}
      ListHeaderComponent={header}
      onEndReached={endReached}
      onEndReachedThreshold={0.2}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => <DisplayWeight {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
