import { buttonClasses, Components, Theme } from '@mui/material';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    color: 'primary',
    variant: 'contained',
    size: 'large',
    type: 'button'
  },
  styleOverrides: {
    root: {
      [`&:has(.${buttonClasses.startIcon})`]: {
        paddingLeft: '12px'
      }
    }
  }
};
