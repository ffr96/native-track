import { Box } from '@/components/Layout/Box';
import { Text } from '@/components/Elements/Text';

import type { Notification as NotificationProps } from '@/types/notification';
import {
  createRestyleComponent,
  VariantProps,
  createVariant,
} from '@shopify/restyle';
import { Theme } from '@/Theme';

const NotificationBase = createRestyleComponent<
  VariantProps<Theme, 'notificationVariants'> &
    React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: 'notificationVariants' })], Box);

export const Notification = ({ type, message }: NotificationProps) => {
  return (
    <NotificationBase
      position={'absolute'}
      borderRadius={5}
      borderWidth={2}
      padding={'s'}
      zIndex={20}
      left={'25%'}
      width={'50%'}
      top={150}
      variant={type}
    >
      <Text textAlign={'center'}>{message}</Text>
    </NotificationBase>
  );
};
