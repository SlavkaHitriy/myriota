import '@mui/material';

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'contained' | 'outlined';
  }
}
