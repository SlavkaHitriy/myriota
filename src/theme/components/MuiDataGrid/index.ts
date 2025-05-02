import { Components, Theme } from '@mui/material';
import { baseTheme } from '../../base';

export const MuiDataGrid: Components<Theme>['MuiDataGrid'] = {
  defaultProps: {
    autoHeight: true,
    pagination: true,
    disableRowSelectionOnClick: true,
    disableColumnMenu: true,
    disableColumnResize: false,
    columnHeaderHeight: 40
  },

  styleOverrides: {
    root: {
      border: 'none',
      color: baseTheme.palette.text.primary
    }
  }
};
