import { getDate } from '@/utils/functions';
import { TrainingLog } from '@/types/logs';

import { Box } from '@/components/Layout/Box';
import { Text } from '@/components/Elements/Text';
import { DisplayExercise } from './DisplayExercise';

export const DisplayLog = ({ date, name, exercises }: TrainingLog) => {
  // If there are exercises, display them. Else notify there aren't.
  const ExerciseDisplay =
    exercises.length > 0 ? (
      exercises.map((exc) => {
        return <DisplayExercise key={exc.id} {...exc} />;
      })
    ) : (
      <Text variant={'detail'}>No exercise info for this date</Text>
    );

  return (
    <Box pl='s' py={'l'} elevation={5}>
      <Text variant={'header3'}>{name}</Text>
      <Text variant={'detail'} pl={'s'}>
        {getDate(date)}
      </Text>
      {ExerciseDisplay}
    </Box>
  );
};
