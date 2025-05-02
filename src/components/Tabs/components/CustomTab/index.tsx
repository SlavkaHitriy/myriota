import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import * as React from 'react';

interface ICustomTabProps extends PropsWithChildren {
  value: number;
  id: number;
}

export const CustomTab: React.FC<ICustomTabProps> = ({ value, id, children }) =>
  value === id && <Box role="tabpanel">{children}</Box>;
