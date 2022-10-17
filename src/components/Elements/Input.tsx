import { TextInput, TextInputProps } from 'react-native';
import {
  createRestyleComponent,
  spacing,
  SpacingProps,
  typography,
  layout,
  BorderProps,
  TypographyProps,
  LayoutProps,
} from '@shopify/restyle';
import { Theme } from '@/Theme';

export type InputProps = TextInputProps &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  TypographyProps<Theme> &
  LayoutProps<Theme>;

const InputBase = createRestyleComponent<InputProps, Theme>(
  [spacing, typography, layout],
  TextInput
);

/**
 * Base Input component; as with Box and Text, you can style it directly
 * using restyle props.
 *
 * Normally, however, FormTextInput is going to be used since it's the child component
 * to be used with Forms.
 */

export const Input = ({ ...props }: InputProps) => {
  return (
    <InputBase
      borderWidth={2}
      margin={'l'}
      padding={'m'}
      borderRadius={5}
      minWidth={250}
      fontSize={18}
      {...props}
    />
  );
};
