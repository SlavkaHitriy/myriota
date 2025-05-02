import type { Components, Theme } from '@mui/material';

import { baseTheme } from '../../base';

export const MuiChip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: {
      backgroundColor: baseTheme.palette.background.default,
      borderRadius: '24px',
      padding: '6px 22px',
      height: 'auto'
    },
    label: {
      color: baseTheme.palette.common.white,
      padding: 0,
      textTransform: 'capitalize'
    },
    sizeMedium: {
      fontSize: 14
    },
    colorSuccess: {
      backgroundColor: baseTheme.palette.accents.green,
      color: baseTheme.palette.common.white,
      '&:hover': {
        backgroundColor: baseTheme.palette.success.dark
      }
    }
  }
};
