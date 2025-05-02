import type { ThemeOptions } from '@mui/material';
import { palette } from '@/theme/base/palette';

export const typography: NonNullable<ThemeOptions['typography']> = () => ({
  fontFamily: 'Roboto, sans-serif',
  allVariants: {
    fontSize: 14,
    color: palette.neutral[400]
  },
  body: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '16px'
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '16px'
  },
  caption: {
    fontSize: 10,
    color: palette.neutral[500],
    fontWeight: 400,
    lineHeight: '12px'
  },
  footnote: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '14px'
  },
  footnoteMedium: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '14px'
  },
  h1: {
    fontSize: 32,
    color: palette.neutral[500],
    fontWeight: 500,
    lineHeight: '38px'
  },
  h2: {
    fontSize: 24,
    color: palette.neutral[500],
    fontWeight: 500,
    lineHeight: '28px'
  },
  h3: {
    fontSize: 20,
    color: palette.neutral[500],
    fontWeight: 500,
    lineHeight: '24px'
  },
  h4: {
    fontSize: 16,
    color: palette.neutral[500],
    fontWeight: 500,
    lineHeight: '20px'
  }
});
