import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import CheckIcon from '@assets/icons/check.svg';

export interface IStep {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'not-started';
}

interface IStepsProps {
  steps: IStep[];
}

export const Steps: FC<IStepsProps> = ({ steps }) => {
  return (
    <Stack direction={'row'} gap={'36px'}>
      {steps.map((step, idx) => (
        <Stack flex={1} key={step.id} direction={'row'} gap={'12px'}>
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            sx={(theme) => ({
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              flexShrink: 0,
              svg: {
                width: '16px',
                height: '16px'
              },
              ...(step.status === 'completed' && {
                bgcolor: theme.palette.accents.green
              }),
              ...(step.status === 'in-progress' && {
                bgcolor: theme.palette.accents.yellow
              }),
              ...(step.status === 'not-started' && {
                bgcolor: theme.palette.neutral[200]
              })
            })}
          >
            {step.status === 'completed' && <CheckIcon />}
            {step.status !== 'completed' && <Typography color={'white'}>{idx + 1}</Typography>}
          </Stack>
          <Stack flex={1} gap={'8px'}>
            <Stack direction={'row'} alignItems={'center'} gap={'8px'} width={'100%'}>
              <Typography
                variant={'h4'}
                sx={(theme) => ({
                  ...(step.status === 'completed' && {
                    color: theme.palette.accents.green
                  }),
                  ...(step.status === 'in-progress' && {
                    color: theme.palette.accents.yellow
                  }),
                  ...(step.status === 'not-started' && {
                    color: theme.palette.neutral[200]
                  })
                })}
              >
                {step.title}
              </Typography>
              <Box
                sx={(theme) => ({
                  height: '1px',
                  flex: 1,
                  ...(step.status === 'completed' && {
                    backgroundColor: theme.palette.accents.green
                  }),
                  ...(step.status === 'in-progress' && {
                    backgroundColor: theme.palette.accents.yellow
                  }),
                  ...(step.status === 'not-started' && {
                    backgroundColor: theme.palette.neutral[200]
                  })
                })}
              />
            </Stack>
            <Typography color={'textSecondary'}>{step.description}</Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
