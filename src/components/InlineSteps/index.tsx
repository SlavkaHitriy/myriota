import React from 'react';
import { Box, Typography, Stack, SxProps, Theme } from '@mui/material';

interface IInlineStepsProps {
  text: string;
  activeStep: number;
}

const stepMarkerSx: (isActive: boolean) => SxProps<Theme> = (isActive) => (theme) => ({
  width: '13px',
  height: '13px',
  borderRadius: '50%',
  backgroundColor: isActive ? theme.palette.accents.green : theme.palette.neutral[100]
});

export const InlineSteps: React.FC<IInlineStepsProps> = ({ activeStep, text }) => {
  return (
    <Stack direction={'row'} gap={'22px'} flex={1}>
      <Typography width={'52px'}>{text}</Typography>
      <Stack direction={'row'} alignItems={'center'} flex={1}>
        {Array.from({ length: 3 }, (_, index) => (
          <React.Fragment key={index}>
            <Box sx={stepMarkerSx(index <= activeStep)} />
            {index < 2 && (
              <Box
                sx={{
                  flex: 1,
                  height: '1px',
                  backgroundColor:
                    index < activeStep ? (theme) => theme.palette.accents.green : (theme) => theme.palette.neutral[100]
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};
