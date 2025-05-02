import { Box, Stack } from '@mui/material';
import { Link, Outlet } from 'react-router';
import logo from '@assets/images/logo.png';

export const MainLayout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        overflow: 'hidden',
        p: '24px'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '64px',
          height: '64px'
        }}
      >
        <Link to={'/'}>
          <Box width={'100%'} height={'100%'} component={'img'} src={logo} alt={'logo'} />
        </Link>
      </Box>
      <Stack flex={1} overflow={'hidden'}>
        <Box
          flex={1}
          component={'main'}
          sx={{
            display: 'flex',
            height: '100%'
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};
