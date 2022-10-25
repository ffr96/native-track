import { Button } from '../Elements/Button';
import { Text } from '../Elements/Text';
import { Box } from '../Layout/Box';

import { useForm, FieldValues } from 'react-hook-form';
import React from 'react';

type FormProps<FormValues extends FieldValues> = {
  children: React.ReactElement[];
  title?: string;
  onSubmit: (a: FormValues) => void;
};

/**
 * Form abstraction using react-hook-form.
 * @param onSubmit a callback to deal with the data
 * from the form once the submit button is pressed.
 *
 * Children of this Form component should be of the type
 * FormTextInput (i.e Controllers wrapping the Input)
 */

export const Form = <FormValues extends Record<string, unknown>>({
  title,
  children,
  onSubmit,
}: FormProps<FormValues>) => {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;

  return (
    <Box
      backgroundColor={'viewPrimaryBackground'}
      justifyContent='center'
      elevation={5}
      alignItems={'center'}
      padding='xxl'
    >
      {title && <Text variant={'header'}>{title}</Text>}
      {React.Children.map(children, (child) => {
        return child?.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
                control: methods.control,
              },
            })
          : child;
      })}
      <Button elevation={10} variant={'send'} onPress={handleSubmit(onSubmit)}>
        <Text>Send</Text>
      </Button>
    </Box>
  );
};
