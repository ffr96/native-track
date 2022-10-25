import { Text } from '../Elements/Text';
import { Theme } from '../../Theme';
import {
  createBox,
  createRestyleComponent,
  VariantProps,
  createVariant,
} from '@shopify/restyle';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Loading } from './Loading';

const ButtonBase = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

const CustomButton = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> &
    React.ComponentProps<typeof ButtonBase>,
  Theme
>([createVariant({ themeKey: 'buttonVariants' })], ButtonBase);

type ButtonProps = React.ComponentProps<typeof CustomButton> & {
  loading?: boolean;
};

export const Button = ({ loading = false, variant, ...props }: ButtonProps) => {
  return (
    <CustomButton
      flexDirection={'row'}
      padding={'s'}
      justifyContent='center'
      alignItems={'center'}
      minWidth={150}
      maxWidth={300}
      borderRadius={5}
      borderWidth={2}
      variant={variant}
      {...props}
    >
      <Loading loading={loading} />
      <Text
        color={variant === 'inverse' ? 'viewLightBackground' : 'mainText'}
        fontWeight={'600'}
      >
        {props.children}
      </Text>
    </CustomButton>
  );
};
