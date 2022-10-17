import { capitalizeFirstLetter } from '@/utils/functions';
import { Measures } from '@/types/weights';

import { Box } from '@/components/Layout/Box';
import { Text } from '@/components/Elements/Text';

export const DisplayMeasure = ({ measures }: { measures?: Measures }) => {
  let measureDisplay = [];
  let i = 0;

  for (const elem in measures) {
    if (elem === 'id') continue; // skip id if present on object
    i++;
    const even = i % 2 === 0;
    measureDisplay.push(
      <Box p='s'>
        <Box
          flexDirection={'row'}
          backgroundColor={
            even ? 'viewPrimaryBackground' : 'viewLightBackground'
          }
        >
          <Box inherit width={'20%'}>
            <Text fontWeight={'700'}>{capitalizeFirstLetter(elem)}: </Text>
          </Box>
          <Box inherit>
            <Text fontWeight={'400'}>
              {measures[elem as keyof Measures]} cm/inch
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box padding={'m'}>
      <Text variant={'header3'}>Measures:</Text>
      <Box borderTopColor={'mainBackground'} borderTopWidth={2} p='s' mr={'s'}>
        {measureDisplay}
      </Box>
    </Box>
  );
};
