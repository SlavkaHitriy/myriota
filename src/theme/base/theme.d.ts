import '@mui/material';
import '@mui/material/styles';
import '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    main: string;
    accents: {
      blue: string;
      darkBlue: string;
      green: string;
      lightGreen: string;
      orange: string;
      yellow: string;
    };
    neutral: {
      50: string;
      100: string;
      150: string;
      200: string;
      300: string;
      400: string;
      500: string;
      700: string;
    };
  }
  interface PaletteOptions {
    main: string;
    accents: {
      blue: string;
      darkBlue: string;
      green: string;
      lightGreen: string;
      orange: string;
      yellow: string;
    };
    neutral: {
      50: string;
      100: string;
      150: string;
      200: string;
      300: string;
      400: string;
      500: string;
      700: string;
    };
  }

  interface TypeBackground {
    secondary: string;
    hover: string;
    tertiary: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyMedium: true;
    footnoteMedium: true;
    footnote: true;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    borders?: {
      default: string;
    };
  }
  interface Theme {
    borders: {
      default: string;
    };
  }
}
