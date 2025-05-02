import { Components, inputBaseClasses, outlinedInputClasses, Theme } from '@mui/material';
import { baseTheme } from '@/theme/base';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
    fullWidth: true,
    size: 'small'
  },
  styleOverrides: {
    root: {
      padding: 0,
      [`& .${inputBaseClasses.input}`]: {
        padding: '6px 8px',
        height: 24
      },
      [`& .${inputBaseClasses.adornedStart}`]: {
        paddingLeft: '8px',
        svg: {
          flexShrink: 0
        }
      },
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: baseTheme.palette.neutral[50]
      },
      [`& .${outlinedInputClasses.input}`]: {
        color: baseTheme.palette.main,
        '&::placeholder': {
          color: baseTheme.palette.neutral[150],
          opacity: 1
        }
      },
      ['&:has(.Mui-readOnly)']: {
        [`& .${inputBaseClasses.input}`]: {
          paddingLeft: 0,
          paddingRight: 0,
          cursor: 'default',
          fontWeight: 500
        },
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          border: 0
        }
      }
    }
  }
};
