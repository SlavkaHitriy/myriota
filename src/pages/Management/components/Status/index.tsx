import { Box, IconButton, Stack, TextField, Typography } from '@mui/material';
import InfoIcon from '@assets/icons/info.svg';
import CheckCircleIcon from '@assets/icons/check-circle.svg';
import ShareIcon from '@assets/icons/share.svg';
import CopyIcon from '@assets/icons/copy.svg';
import CalendarIcon from '@assets/icons/calendar.svg';
import PeopleIcon from '@assets/icons/people.svg';
import { IStep, Steps } from '@pages/Management/components/Steps';
import avatarImage from '@assets/images/avatar.png';

const steps: IStep[] = [
  {
    id: 1,
    title: 'Draft',
    description: 'Review and finalize agreement',
    status: 'completed'
  },
  {
    id: 2,
    title: 'Awaiting Approval',
    description: '2 approvals left',
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Active',
    description: 'This is description',
    status: 'not-started'
  },
  {
    id: 4,
    title: 'In Closeout',
    description: 'This is description',
    status: 'not-started'
  },
  {
    id: 5,
    title: 'Completed',
    description: 'Agreement has been completed',
    status: 'not-started'
  }
];

const approvedUsers = [
  {
    id: 1,
    image: avatarImage
  },
  {
    id: 2,
    image: avatarImage
  },
  {
    id: 3,
    image: avatarImage
  },
  {
    id: 4,
    image: avatarImage
  },
  {
    id: 5,
    image: avatarImage
  },
  {
    id: 6,
    image: avatarImage
  }
];

export const Status = () => {
  return (
    <Stack>
      <Stack gap={'24px'}>
        <Box
          sx={(theme) => ({
            borderRadius: '12px',
            border: `1px solid ${theme.palette.neutral[100]}`,
            bgcolor: 'common.white',
            p: '24px'
          })}
        >
          <Stack mb={'32px'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant={'h4'}>Status</Typography>
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'8px'}
              sx={(theme) => ({
                padding: '4px 12px',
                borderRadius: '24px',
                cursor: 'pointer',
                bgcolor: theme.palette.neutral[50],
                border: `1px solid ${theme.palette.neutral[100]}`,
                svg: { color: theme.palette.neutral[700] },
                '&:hover': {
                  backgroundColor: theme.palette.neutral[100]
                }
              })}
            >
              <InfoIcon />
              <Typography variant={'footnoteMedium'}>View Details</Typography>
            </Stack>
          </Stack>
          <Box mb={'80px'}>
            <Steps steps={steps} />
          </Box>
          <Stack mb={'24px'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'8px'}
              sx={(theme) => ({
                padding: '4px 12px',
                borderRadius: '24px',
                cursor: 'pointer',
                bgcolor: theme.palette.common.white,
                border: `1px solid ${theme.palette.neutral[100]}`,
                '&:hover': {
                  backgroundColor: theme.palette.neutral[50]
                }
              })}
            >
              <CheckCircleIcon />
              <Typography variant={'footnoteMedium'}>Mark Complete</Typography>
            </Stack>
            <Stack direction={'row'} gap={'12px'}>
              <IconButton>
                <ShareIcon />
              </IconButton>
              <IconButton>
                <CopyIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Stack
            pt={'20px'}
            gap={'24px'}
            direction={'row'}
            sx={(theme) => ({
              borderTop: `1px solid ${theme.palette.neutral[50]}`
            })}
          >
            <Stack flex={1} gap={'16px'}>
              <Typography variant={'h4'}>LX-A-1</Typography>
              <Stack
                sx={(theme) => ({
                  borderRadius: '12px',
                  border: `1px solid ${theme.palette.neutral[100]}`,
                  bgcolor: '#F7F7F7',
                  p: '16px'
                })}
                gap={'16px'}
              >
                <Stack direction={'row'} alignItems={'center'} gap={'48px'}>
                  <Typography
                    variant={'footnoteMedium'}
                    sx={(theme) => ({
                      width: 80,
                      color: theme.palette.neutral[300]
                    })}
                  >
                    Assignee
                  </Typography>
                  <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                    <Box
                      width={'40px'}
                      height={'40px'}
                      borderRadius={'50%'}
                      src={avatarImage}
                      component={'img'}
                      alt={'avatar'}
                    />
                    <Typography variant={'footnoteMedium'}>Jenifer Anniston</Typography>
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={'48px'}>
                  <Typography
                    variant={'footnoteMedium'}
                    sx={(theme) => ({
                      width: 80,
                      color: theme.palette.neutral[300]
                    })}
                  >
                    Due Date
                  </Typography>
                  <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                    <Stack
                      width={'40px'}
                      height={'40px'}
                      borderRadius={'50%'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={(theme) => ({
                        backgroundColor: theme.palette.common.white,
                        border: `1px solid ${theme.palette.neutral[50]}`,
                        svg: {
                          width: '24px',
                          height: '24px',
                          color: theme.palette.neutral[300]
                        }
                      })}
                    >
                      <CalendarIcon />
                    </Stack>
                    <Typography variant={'footnoteMedium'}>Jenifer Anniston</Typography>
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={'48px'}>
                  <Typography
                    variant={'footnoteMedium'}
                    sx={(theme) => ({
                      width: 80,
                      color: theme.palette.neutral[300]
                    })}
                  >
                    Assignee
                  </Typography>
                  <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                    <Stack
                      width={'40px'}
                      height={'40px'}
                      borderRadius={'50%'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={(theme) => ({
                        backgroundColor: theme.palette.common.white,
                        border: `1px solid ${theme.palette.neutral[50]}`,
                        svg: {
                          width: '24px',
                          height: '24px',
                          color: theme.palette.neutral[300]
                        }
                      })}
                    >
                      <PeopleIcon />
                    </Stack>
                    <Box
                      sx={{
                        p: '8px 12px',
                        bgcolor: '#F4E4FF',
                        borderRadius: '24px'
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#4D51BF'
                        }}
                        variant={'footnoteMedium'}
                      >
                        Finance Team
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={'48px'}>
                  <Typography
                    variant={'footnoteMedium'}
                    sx={(theme) => ({
                      width: 80,
                      color: theme.palette.neutral[300]
                    })}
                  >
                    Assignee
                  </Typography>
                  <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                    <Typography variant={'footnoteMedium'}>Contract</Typography>
                    <Box
                      sx={{
                        p: '8px 12px',
                        bgcolor: '#DFEEFF',
                        borderRadius: '24px'
                      }}
                    >
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.accents.blue
                        })}
                        variant={'footnoteMedium'}
                      >
                        Government
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={'48px'}>
                  <Typography
                    variant={'footnoteMedium'}
                    sx={(theme) => ({
                      width: 80,
                      color: theme.palette.neutral[300]
                    })}
                  >
                    Assignee
                  </Typography>
                  <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                    <Box
                      sx={{
                        p: '8px 12px',
                        bgcolor: '#FFECE5',
                        borderRadius: '24px'
                      }}
                    >
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.error.main
                        })}
                        variant={'footnoteMedium'}
                      >
                        High
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack flex={1} gap={'16px'}>
              <Typography variant={'h4'}>Description</Typography>
              <TextField
                multiline={true}
                sx={(theme) => ({
                  flex: 1,
                  '.MuiOutlinedInput-root': {
                    bgcolor: '#F7F7F7',
                    borderRadius: '12px',
                    height: '100%',
                    alignItems: 'flex-start'
                  },
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.neutral[100]
                  }
                })}
                placeholder={'Here goes the description. Lots of text.'}
              />
            </Stack>
          </Stack>
        </Box>

        <Stack
          sx={(theme) => ({
            borderRadius: '12px',
            border: `1px solid ${theme.palette.neutral[100]}`,
            bgcolor: 'common.white',
            p: '24px'
          })}
        >
          <Stack direction={'row'} alignItems={'center'} gap={'8px'} mb={'24px'}>
            <Box
              sx={{
                display: 'flex',
                svg: {
                  width: '24px',
                  height: '24px'
                }
              }}
            >
              <InfoIcon />
            </Box>
            <Typography variant={'h4'}>Approval Workflow</Typography>
          </Stack>
          <Stack
            sx={(theme) => ({
              borderTop: `1px solid ${theme.palette.neutral[50]}`
            })}
            gap={'24px'}
            py={'24px'}
          >
            <Typography variant={'bodyMedium'}>Primary Owner (1)</Typography>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                <Box
                  width={'40px'}
                  height={'40px'}
                  borderRadius={'50%'}
                  src={avatarImage}
                  component={'img'}
                  alt={'avatar'}
                />
                <Typography variant={'footnoteMedium'}>Jenifer Anniston</Typography>
              </Stack>
              <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    color: theme.palette.accents.green
                  })}
                >
                  <CheckCircleIcon />
                </Box>
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.accents.green
                  })}
                  variant={'bodyMedium'}
                >
                  Approved
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            sx={(theme) => ({
              borderTop: `1px solid ${theme.palette.neutral[50]}`
            })}
            py={'24px'}
          >
            <Typography variant={'bodyMedium'} mb={'12px'}>
              Approver ({approvedUsers.length})
            </Typography>
            {approvedUsers.map((user, idx) => (
              <Stack
                key={`avatar-${user.id}`}
                direction={'row'}
                gap={'8px'}
                alignItems={'center'}
                justifyContent={'space-between'}
                py={'12px'}
                sx={(theme) => ({
                  ...(idx !== 0 && {
                    borderTop: `1px solid ${theme.palette.neutral[50]}`
                  })
                })}
              >
                <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                  <Box
                    width={'40px'}
                    height={'40px'}
                    borderRadius={'50%'}
                    src={user.image}
                    component={'img'}
                    alt={'avatar'}
                  />
                  <Typography variant={'footnoteMedium'}>Jenifer Anniston</Typography>
                </Stack>
                <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                  <Box
                    sx={(theme) => ({
                      display: 'flex',
                      color: theme.palette.accents.green
                    })}
                  >
                    <CheckCircleIcon />
                  </Box>
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.accents.green
                    })}
                    variant={'bodyMedium'}
                  >
                    Approved
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
