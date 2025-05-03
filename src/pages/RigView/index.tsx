import { Box, Button, Chip, IconButton, Stack, Typography } from '@mui/material';
import RigIcon from '@assets/icons/rig.svg';
import MapViewIcon from '@assets/icons/map-view.svg';
import SummaryIcon from '@assets/icons/summary.svg';
import ArrowIcon from '@assets/icons/arrow.svg';
import MegaDotsIcon from '@assets/icons/mega-dots.svg';
import SettingsIcon from '@assets/icons/settings.svg';
import { useState } from 'react';
import { InlineSteps } from '@components/InlineSteps';
import { CircleProgress } from '@components/CircleProgress';
import { LinearProgress } from '@components/LinearProgress';
import { Slider } from '@pages/RigView/components/Slider';
import { useNavigate } from 'react-router';

type TTabView = 'rig' | 'map-view' | 'management';

interface ITab {
  id: TTabView;
  label: string;
  icon: React.ReactNode;
}

const tabs: ITab[] = [
  {
    id: 'rig',
    label: 'Rig View',
    icon: <RigIcon />
  },
  {
    id: 'map-view',
    label: 'Map View',
    icon: <MapViewIcon />
  },
  {
    id: 'management',
    label: 'Management',
    icon: <SummaryIcon />
  }
];

export const RigView = () => {
  const [activeTab, setActiveTab] = useState<TTabView>('rig');
  const navigate = useNavigate();

  const handleTabChange = (tab: TTabView) => {
    if (tab === 'management') return navigate('/management');
    setActiveTab(tab);
  };

  return (
    <Stack flex={1} overflow={'hidden'}>
      <Stack direction={'row'} gap={'12px'} pl={'316px'} mb={'80px'}>
        {tabs.map((tab) => (
          <Stack
            key={tab.id}
            direction={'row'}
            alignItems={'center'}
            gap={'8px'}
            onClick={() => handleTabChange(tab.id)}
            sx={(theme) => ({
              padding: '8px 22px',
              borderRadius: '24px',
              ...(activeTab !== tab.id && {
                cursor: 'pointer',
                bgcolor: theme.palette.background.default,
                svg: { color: theme.palette.neutral[700] },
                '&:hover': {
                  backgroundColor: theme.palette.background.hover
                }
              }),
              ...(activeTab === tab.id && {
                backgroundColor: theme.palette.neutral[700],
                svg: { color: theme.palette.background.default },
                color: theme.palette.background.default,
                pointerEvents: 'none'
              })
            })}
          >
            {tab.icon}
            {tab.label}
          </Stack>
        ))}
      </Stack>
      <Stack
        direction={'row'}
        flex={1}
        position={'relative'}
        sx={{
          ...(activeTab === 'map-view' && {
            overflow: 'hidden'
          })
        }}
      >
        <Stack width={'316px'} flexShrink={0} direction={'row'} gap={'28px'}>
          <IconButton color={'primary'}>
            <ArrowIcon />
          </IconButton>
          <Stack gap={'14px'}>
            <Typography variant={'h2'}>RIG 102</Typography>
            <Chip
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '-4px',
                  left: '-4px',
                  bottom: '-4px',
                  right: '-4px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(39, 178, 112, 0.50)',
                  zIndex: -1
                }
              }}
              color={'success'}
              label={'watching'}
            />
          </Stack>
        </Stack>
        <Stack
          position={'relative'}
          zIndex={3}
          width={'100%'}
          maxWidth={'270px'}
          gap={'28px'}
          alignItems={'flex-start'}
        >
          <Stack gap={'8px'}>
            <Typography variant={'h4'}>Generator 1</Typography>
            <Typography>Power Systems</Typography>
          </Stack>
          <Stack gap={'8px'} width={'100%'}>
            <InlineSteps text={'In Route'} activeStep={1} />
            <Typography color={'textSecondary'}>Status</Typography>
          </Stack>
          <Stack gap={'8px'}>
            <Typography>March 23, 2025 1:23 PM CST</Typography>
            <Typography color={'textSecondary'}>Updated</Typography>
          </Stack>
          <Stack gap={'8px'}>
            <Typography>456011277870009</Typography>
            <Typography color={'textSecondary'}>Tracker</Typography>
          </Stack>
          <Button
            sx={(theme) => ({
              height: '36px',
              padding: '8px 22px',
              borderRadius: '24px',
              textTransform: 'capitalize',
              color: theme.palette.accents.green,
              bgcolor: theme.palette.background.default,
              boxShadow: 'none !important'
            })}
          >
            View Map
          </Button>
        </Stack>
        <Stack
          height={'100%'}
          ml={'64px'}
          gap={'24px'}
          sx={{
            flex: 1,
            ...(activeTab === 'rig' && {
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '70%',
              height: '110%'
            })
          }}
        >
          <Slider withMaps={activeTab !== 'rig'} />
        </Stack>
      </Stack>
      <Stack mt={'16px'} direction={'row'} gap={'12px'} width={'100%'}>
        <Stack gap={'24px'} p={'24px'} bgcolor={'background.tertiary'} borderRadius={'24px'}>
          <Typography variant={'h3'}>Rig Status</Typography>
          <Stack direction={'row'} gap={'24px'}>
            <Stack alignItems={'center'} gap={'24px'}>
              <CircleProgress value={35} size={135} />
              <Typography variant={'h4'}>Rigging Up</Typography>
            </Stack>
            <Stack alignItems={'center'} gap={'24px'}>
              <CircleProgress value={35} size={135} />
              <Typography variant={'h4'}>In Transit</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack flex={1} gap={'24px'} p={'24px'} bgcolor={'background.tertiary'} borderRadius={'24px'}>
          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'h3'}>Deployment Status</Typography>
            <Stack height={0} alignItems={'center'} direction={'row'} gap={'12px'}>
              <IconButton color={'primary'}>
                <MegaDotsIcon />
              </IconButton>
              <IconButton color={'primary'}>
                <SettingsIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction={'row'} gap={'24px'} width={'100%'}>
            <Stack gap={'24px'} width={'100%'}>
              <Stack alignItems={'center'} direction={'row'} width={'100%'} gap={'24px'}>
                <Typography>Power</Typography>
                <LinearProgress value={35} />
              </Stack>
              <Stack gap={'24px'}>
                <Stack gap={'12px'}>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Generator 1</Typography>
                    <InlineSteps text={'In Route'} activeStep={1} />
                  </Stack>
                </Stack>
                <Stack gap={'12px'}>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Generator 2</Typography>
                    <InlineSteps text={'On Site'} activeStep={2} />
                  </Stack>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Generator 3</Typography>
                    <InlineSteps text={'In Route'} activeStep={1} />
                  </Stack>
                </Stack>
                <Stack gap={'12px'}>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Generator 4</Typography>
                    <InlineSteps text={'On Site'} activeStep={2} />
                  </Stack>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Generator 5</Typography>
                    <InlineSteps text={'In Route'} activeStep={1} />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Box width={'1px'} flexShrink={0} bgcolor={'neutral.100'} />
            <Stack gap={'24px'} width={'100%'}>
              <Stack alignItems={'center'} direction={'row'} width={'100%'} gap={'24px'}>
                <Typography>Pumping</Typography>
                <LinearProgress value={35} />
              </Stack>
              <Stack gap={'24px'}>
                <Stack gap={'12px'}>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Mud Tank 1</Typography>
                    <InlineSteps text={'In Route'} activeStep={1} />
                  </Stack>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Mud Tank 2</Typography>
                    <InlineSteps text={'On Site'} activeStep={2} />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Box width={'1px'} flexShrink={0} bgcolor={'neutral.100'} />
            <Stack gap={'24px'} width={'100%'}>
              <Stack alignItems={'center'} direction={'row'} width={'100%'} gap={'24px'}>
                <Typography>Power</Typography>
                <LinearProgress value={35} />
              </Stack>
              <Stack gap={'24px'}>
                <Stack gap={'12px'}>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Mud Tank 1</Typography>
                    <InlineSteps text={'In Route'} activeStep={1} />
                  </Stack>
                  <Stack direction={'row'} alignItems={'center'} gap={'24px'}>
                    <Typography variant={'bodyMedium'}>Mud Tank 2</Typography>
                    <InlineSteps text={'On Site'} activeStep={2} />
                  </Stack>
                </Stack>
              </Stack>
              <Stack alignItems={'center'} direction={'row'} mt={'auto'} alignSelf={'flex-end'}>
                <IconButton
                  sx={{
                    borderRadius: '24px 0 0 24px'
                  }}
                  color={'primary'}
                >
                  <ArrowIcon />
                </IconButton>
                <IconButton
                  sx={{
                    transform: 'rotate(180deg)',
                    borderRadius: '24px 0 0 24px'
                  }}
                  color={'primary'}
                >
                  <ArrowIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
