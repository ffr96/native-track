import { Box } from '@/components/Layout/Box';
import { Text } from '@/components/Elements/Text';
import { Form } from '@/components/Form/Form';
import { FormTextInput } from '@/components/Form/FormTextInput';
import CheckBox from 'expo-checkbox';

import { MAX_VIEW_HEIGHT } from '@/utils/constants';
import { getDate } from '@/utils/functions';
import { useState } from 'react';

export const WeightForm = () => {
  const [showMeasurements, setShowMeasurements] = useState(false);
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box height={MAX_VIEW_HEIGHT}>
      <Form onSubmit={handleSubmit}>
        <Text variant={'header4'}>Add New Weight entry</Text>
        <FormTextInput name='Weight' placeholder='Weight kg/lb' />
        <FormTextInput name='Date' editable={false} value={getDate()} />
        <FormTextInput name='Comment' placeholder='Comments' />
        <CheckBox
          value={showMeasurements}
          style={{ margin: 5 }}
          onValueChange={(v) => setShowMeasurements(v)}
        />
      </Form>
    </Box>
  );
};
