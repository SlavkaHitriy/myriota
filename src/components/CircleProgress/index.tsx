import { CircularProgress, CircularProgressProps, Stack, Typography } from '@mui/material';
import * as React from 'react';

interface CircleProgressProps extends CircularProgressProps {
  description?: string;
  withoutText?: boolean;
}

export const CircleProgress: React.FC<CircleProgressProps> = ({
  size,
  value,
  thickness,
  description,
  withoutText,
  ...props
}) => {
  return (
    <Stack position={'relative'} alignItems={'center'} justifyContent={'center'} width={size} height={size}>
      <CircularProgress
        sx={(theme) => ({
          color: theme.palette.accents.blue,
          position: 'absolute',
          zIndex: 2
        })}
        size={size}
        value={value}
        thickness={thickness}
        {...props}
        variant="determinate"
      />
      <CircularProgress
        size={size}
        thickness={thickness}
        sx={(theme) => ({
          position: 'absolute',
          color: theme.palette.common.white,
          zIndex: 1
        })}
        value={100}
        variant="determinate"
      />
      {!withoutText && (
        <Stack
          alignItems={'center'}
          sx={{
            position: 'absolute'
          }}
          gap={'4px'}
        >
          <Typography variant={'h4'}>{value}%</Typography>
          {description && (
            <Typography
              sx={{
                color: 'neutral.300'
              }}
              variant={'footnote'}
            >
              {description}
            </Typography>
          )}
        </Stack>
      )}
    </Stack>
  );
};
