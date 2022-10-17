import { getDate } from '@/utils/functions';
import { Weight } from '@/types/weights';

import { DisplayMeasure } from './DisplayMeasure';
import { Box } from '@/components/Layout/Box';
import { Text } from '@/components/Elements/Text';

export const DisplayWeight = ({ date, weight, measures, comments }: Weight) => {
  const comment = comments ?? 'No comments for this date';

  let measure = measures ? (
    <DisplayMeasure measures={measures} />
  ) : (
    <Text variant={'detail'}>No measures for this date</Text>
  );

  return (
    <Box pl='s' py={'l'} elevation={5}>
      <Text variant={'header3'}>{getDate(date)}</Text>
      <Text variant={'detail'} pl={'s'}>
        On this day: <Text variant={'header4'}>{weight} kg/lb</Text>
      </Text>
      <Text variant={'detail'}>{comment}</Text>
      {measure}
    </Box>
  );
};
