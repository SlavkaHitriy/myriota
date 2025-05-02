import type { Components, Theme } from '@mui/material';
import { baseTheme } from '@/theme/base';

export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    variant: 'contained',
    size: 'medium'
  },
  styleOverrides: {
    root: {
      flexShrink: 0
    },
    sizeMedium: {
      width: '40px',
      height: '40px',
      color: baseTheme.palette.neutral[700],
      background: baseTheme.palette.common.white,
      '&:hover': {
        background: baseTheme.palette.background.hover
      },
      svg: {
        width: '24px',
        height: '24px'
      }
    }
  }
};
