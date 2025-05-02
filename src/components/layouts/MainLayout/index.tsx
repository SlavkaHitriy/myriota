import { Box, Stack } from '@mui/material';
import { Link, Outlet } from 'react-router';
import logo from '@assets/images/logo.png';
import logoSignaltracks from '@assets/images/logo.svg?url';

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
          position: 'absolute'
        }}
      >
        <Link to={'/'}>
          <Box
            width={'125px'}
            height={'24px'}
            sx={{
              objectFit: 'contain'
            }}
            component={'img'}
            src={logoSignaltracks}
            alt={'logo'}
          />
        </Link>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 24
        }}
      >
        <Link to={'/'}>
          <Box
            width={'48px'}
            height={'48px'}
            sx={{
              objectFit: 'contain'
            }}
            component={'img'}
            src={logo}
            alt={'logo'}
          />
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
