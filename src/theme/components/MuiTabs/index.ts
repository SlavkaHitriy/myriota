import { Components, tabsClasses, Theme } from '@mui/material';

import { baseTheme } from '../../base';

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    root: {
      minHeight: 'auto',
      [`.${tabsClasses.flexContainer}`]: {
        paddingLeft: '24px',
        paddingRight: '24px',
        gap: '24px'
      }
    },
    indicator: {
      backgroundColor: baseTheme.palette.neutral[500]
    }
  }
};

export const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root: {
      textTransform: 'capitalize',
      padding: '8px 12px 10px',
      minHeight: 'auto',
      '&.Mui-selected': {
        color: baseTheme.palette.neutral[500]
      }
    }
  }
};
