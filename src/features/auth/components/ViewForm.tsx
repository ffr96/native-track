import { Box } from '@/components/Layout/Box';
import { MAX_VIEW_HEIGHT } from '@/utils/constants';

/**
 * Keep both forms view consistent.
 */

export const ViewForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      height={MAX_VIEW_HEIGHT}
      justifyContent='center'
      backgroundColor={'viewLightBackground'}
    >
      {children}
    </Box>
  );
};
