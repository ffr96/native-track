import { Box } from '@/components/Layout/Box';

/**
 * Keep both forms view consistent.
 */

export const ViewForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      height={'92%'}
      justifyContent='center'
      backgroundColor={'viewLightBackground'}
    >
      {children}
    </Box>
  );
};
