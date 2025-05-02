import type { ThemeOptions } from '@mui/material';

export const palette: NonNullable<ThemeOptions['palette']> = {
  accents: {
    blue: '#1E75FF',
    darkBlue: '#677AF0',
    green: '#27B270',
    lightGreen: '#A6EC99',
    orange: '#F2A93B',
    yellow: '#FFBC24'
  },
  background: {
    default: '#FFFFFF',
    secondary: '#DFDFDF',
    tertiary: '#E7E7E7',
    hover: '#F0F0F0'
  },
  text: {
    secondary: '#8C9295'
  },
  error: {
    main: '#FF3941'
  },
  success: {
    main: '#18AB87'
  },
  main: '#151D26',
  neutral: {
    50: '#E6E7E8',
    100: '#B2B6B8',
    150: '#8F98AB',
    200: '#8C9295',
    300: '#586065',
    400: '#374147',
    500: '#051219',
    700: '#040D12'
  }
};
