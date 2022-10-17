import { Theme } from '../../Theme';
import { createBox } from '@shopify/restyle';

const BoxBase = createBox<Theme>();
type Props = React.ComponentProps<typeof BoxBase> & {
  icon?: string;
  inherit?: boolean;
};

/**
 * Basic View component created using restyle.
 * All of the default props from View can be used as well as styled directly via props.
 *
 * @param inherit whether Box should inherit parent's backgroundColor or use its default
 */

export const Box = ({ icon = '', inherit = false, ...props }: Props) => {
  return (
    <BoxBase
      backgroundColor={inherit ? undefined : 'viewLightBackground'}
      {...props}
    >
      {props.children}
    </BoxBase>
  );
};
