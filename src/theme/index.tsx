import { createTheme } from '@mui/material';

import { baseTheme } from './base';
import * as components from './components';

// Fix problems with MuiDataGrid type
// https://mui.com/x/react-data-grid/getting-started/#typescript
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme(baseTheme, {
  components
});

export default theme;
