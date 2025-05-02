import type { Components, Theme } from '@mui/material';

import { baseTheme } from '../../base';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: {
    body: {
      backgroundColor: baseTheme.palette.background.secondary,
      color: baseTheme.palette.neutral[700]
    },
    a: {
      color: 'inherit',
      textDecoration: 'none'
    },
    img: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto'
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: 4
      },
      '*::-webkit-scrollbar-thumb': {
        width: 4,
        backgroundColor: baseTheme.palette.neutral[400]
      }
    }
  }
};
