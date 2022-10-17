import { Exercises } from '@/types/logs';

import { Box } from '@/components/Layout/Box';
import { Text } from '@/components/Elements/Text';

type SetsProp = {
  weight: number[];
  reps: number[];
  sets: number;
};

const ShowSets = ({ sets, reps, weight }: SetsProp) => {
  let show = [];
  for (let i = 0; i < sets; i++) {
    show.push(
      <Box key={i}>
        <Text>
          Set {i + 1}: <Text fontWeight={'bold'}>{reps[i]}</Text> x{' '}
          <Text fontWeight={'bold'}>{weight[i]}</Text>{' '}
          <Text variant={'detail'}>kg/lb</Text>
        </Text>
      </Box>
    );
  }
  return (
    <Box borderTopColor={'mainBackground'} borderTopWidth={2}>
      {show}
    </Box>
  );
};

export const DisplayExercise = ({
  name,
  reps,
  sets,
  weight,
  comments,
  id,
}: Exercises) => {
  return (
    <Box m={'m'}>
      <Text variant={'header4'}>{name}:</Text>
      <ShowSets sets={sets} reps={reps} weight={weight} />
      {comments && <Text variant={'detail'}>{comments}</Text>}
    </Box>
  );
};
