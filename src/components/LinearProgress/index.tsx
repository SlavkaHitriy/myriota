import {
  LinearProgress as MuiLinearProgress,
  linearProgressClasses,
  LinearProgressProps,
  Stack,
  Typography
} from '@mui/material';
import * as React from 'react';

export const LinearProgress: React.FC<LinearProgressProps> = ({ value, ...props }) => {
  return (
    <Stack width={'100%'} alignItems={'center'} direction={'row'} gap={'16px'}>
      <MuiLinearProgress
        sx={(theme) => ({
          flex: 1,
          maxWidth: '150px',
          bgcolor: theme.palette.common.white,
          height: '8px',
          [`.${linearProgressClasses.bar}`]: {
            bgcolor: theme.palette.accents.green
          }
        })}
        value={value}
        {...props}
        variant="determinate"
      />
      <Typography variant={'h3'}>{value}%</Typography>
    </Stack>
  );
};
