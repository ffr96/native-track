import { Box } from '@/components/Layout/Box';

export const NavbarView = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      padding={'m'}
      backgroundColor={'viewPrimaryBackground'}
      borderTopWidth={2}
      borderTopColor={'viewOrangeDetails'}
      width={'100%'}
      height={'8%'}
      top={'92%'}
      elevation={5}
      position={'absolute'}
      flexDirection='row'
      alignItems={'center'}
      justifyContent={'space-around'}
    >
      {children}
    </Box>
  );
};
