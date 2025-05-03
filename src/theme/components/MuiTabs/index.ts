import { Components, Theme } from '@mui/material';

import { baseTheme } from '../../base';

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    root: {
      minHeight: 'auto'
    },
    indicator: {
      display: 'none'
    }
  }
};

export const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root: {
      textTransform: 'capitalize',
      padding: '8px 22px',
      minHeight: 'auto',
      color: baseTheme.palette.neutral[700],
      fontWeight: '400',
      border: `1px solid transparent`,
      '&.Mui-selected': {
        color: baseTheme.palette.accents.blue,
        fontWeight: '500',
        backgroundColor: '#EAF2FB',
        borderRadius: '24px',
        border: `1px solid ${baseTheme.palette.accents.blue}`
      }
    }
  }
};
