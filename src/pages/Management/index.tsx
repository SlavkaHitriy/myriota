import { Box, Chip, chipClasses, IconButton, Stack, Typography } from '@mui/material';
import { Link } from 'react-router';
import ArrowIcon from '@assets/icons/arrow.svg';
import CheckIcon from '@assets/icons/check.svg';
import DotsIcon from '@assets/icons/dots.svg';
import avatarImg from '@assets/images/avatar.png';
import { Tabs } from '@components/Tabs';
import { Status } from '@pages/Management/components/Status';

const avatars = [
  {
    id: 1,
    image: avatarImg
  },
  {
    id: 2,
    image: avatarImg
  },
  {
    id: 3,
    image: avatarImg
  },
  {
    id: 4,
    image: avatarImg
  },
  {
    id: 5,
    image: avatarImg
  },
  {
    id: 6,
    image: avatarImg
  }
];

const tabs = [
  {
    id: 1,
    label: 'Dashboard',
    element: <Box>Dashboard</Box>
  },
  {
    id: 2,
    label: 'Details',
    element: <Box>Details</Box>
  },
  {
    id: 3,
    label: 'Linked agreements',
    element: <Box>Linked agreements</Box>
  },
  {
    id: 4,
    label: 'Attachments',
    element: <Box>Attachments</Box>
  },
  {
    id: 5,
    label: 'Closeout',
    element: <Box>Closeout</Box>
  },
  {
    id: 6,
    label: 'Modifications',
    element: <Box>Modifications</Box>
  },
  {
    id: 7,
    label: 'Tasks',
    element: <Box>Tasks</Box>
  },
  {
    id: 8,
    label: 'Activity',
    element: <Box>Activity</Box>
  },
  {
    id: 9,
    label: 'Team',
    element: <Box>Team</Box>
  },
  {
    id: 10,
    label: 'Integrations',
    element: <Box>Integrations</Box>
  },
  {
    id: 11,
    label: 'Status',
    element: <Status />
  }
];

export const Management = () => {
  return (
    <Stack flex={1} overflow={'hidden'} pt={'64px'} gap={'24px'}>
      <Stack
        gap={'24px'}
        p={'24px'}
        bgcolor={'background.tertiary'}
        borderRadius={'24px'}
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'center'}
      >
        <Stack gap={'16px'}>
          <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
            <Typography variant={'h2'}>DX-TIN-A-1</Typography>
            <Chip
              sx={(theme) => ({
                p: '4px',
                borderRadius: '4px',
                border: `1px solid ${theme.palette.error.main}`,
                [`.${chipClasses.label}`]: {
                  color: theme.palette.error.main,
                  fontSize: 10
                }
              })}
              size={'small'}
              label={'DRAFT'}
            />
          </Stack>
          <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
            <Link to={'/'}>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.neutral[200]
                })}
                variant={'footnoteMedium'}
              >
                Contract
              </Typography>
            </Link>
            <Stack
              alignItems={'center'}
              justifyContent={'center'}
              sx={{
                transform: 'rotate(180deg)',
                svg: {
                  width: 16,
                  height: 16
                }
              }}
            >
              <ArrowIcon />
            </Stack>
            <Typography variant={'footnoteMedium'}>Government</Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} gap={'32px'}>
          <Stack direction={'row'} gap={'16px'} alignItems={'center'}>
            <Typography variant={'bodyMedium'}>Last modified Oct 24</Typography>
            <Stack direction={'row'} alignItems={'center'}>
              {(avatars.length > 4 ? avatars.slice(0, 4) : avatars).map((avatar) => (
                <Stack
                  key={`avatar-${avatar.id}`}
                  sx={(theme) => ({
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `1px solid ${theme.palette.common.white}`,
                    '&:not(:first-of-type)': {
                      ml: '-8px'
                    }
                  })}
                >
                  <Box component={'img'} src={avatar.image} alt={'avatar'} />
                </Stack>
              ))}
              {avatars.length > 4 && (
                <Stack
                  sx={(theme) => ({
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `1px solid ${theme.palette.common.white}`,
                    backgroundColor: theme.palette.accents.blue,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ml: '-8px'
                  })}
                >
                  <Typography color={'white'} variant={'footnote'}>
                    +{avatars.length - 4}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
          <Stack direction={'row'} gap={'12px'}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'8px'}
              sx={(theme) => ({
                padding: '8px 30px',
                borderRadius: '24px',
                cursor: 'pointer',
                bgcolor: theme.palette.accents.blue,
                svg: { color: theme.palette.neutral[700] },
                '&:hover': {
                  backgroundColor: theme.palette.accents.darkBlue
                }
              })}
            >
              <CheckIcon />
              <Typography color={'white'}>Submit</Typography>
            </Stack>
            <IconButton color={'primary'}>
              <DotsIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <Stack p={'24px'} bgcolor={'background.tertiary'} borderRadius={'24px'} width={'100%'} overflow={'hidden'}>
        <Tabs items={tabs} defaultTab={tabs[tabs.length - 1].id} />
      </Stack>
    </Stack>
  );
};
