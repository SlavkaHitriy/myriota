import type { Components, Theme } from '@mui/material';

import { baseTheme } from '../../base';

export const MuiPaper: Components<Theme>['MuiPaper'] = {
  styleOverrides: {
    root: {
      backgroundColor: baseTheme.palette.background.default
    }
  }
};
