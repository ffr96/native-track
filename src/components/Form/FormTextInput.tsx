import { Control, Controller as FormController } from 'react-hook-form';
import { Input, InputProps } from '../Elements/Input';

type ControllerProps = {
  name: string;
  required?: boolean;
  control?: Control;
};

/**
 * Text Input Controller abstraction to be used as a child of Form
 * @param name is required, it will be a field in the object
 * that the form's onSubmit returns.
 */

export const FormTextInput = ({
  control,
  required = false,
  name,
  ...rest
}: ControllerProps & InputProps) => {
  return (
    <FormController
      control={control}
      rules={{ required: required }}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
      name={name}
    />
  );
};
