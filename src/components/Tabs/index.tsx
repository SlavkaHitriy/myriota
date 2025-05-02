import { Tabs as MuiTabs, Tab, SxProps, Theme, Box, Typography, Stack } from '@mui/material';
import { memo, SyntheticEvent, useCallback, useState } from 'react';

import { CustomTab } from './components/CustomTab';
import * as React from 'react';

export interface ITabItem {
  id: number;
  label: string;
  amount?: number;
  element: React.ReactNode;
  hideStaticContent?: boolean;
}

interface ITabsProps {
  items: ITabItem[];
  sx?: SxProps<Theme>;
  renderContentSlot?: React.ReactNode;
  renderRightSlot?: React.ReactNode;
  slots?: {
    content?: React.ReactNode;
    right?: React.ReactNode;
  };
}

export const Tabs: React.FC<ITabsProps> = memo(({ items, sx, slots }) => {
  const [selectedTab, setSelectedTab] = useState(items[0].id);

  const handleTabChange = useCallback((_: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  }, []);

  return (
    <>
      <Stack direction={'row'} gap={'32px'} justifyContent={'space-between'} alignItems={'center'}>
        <MuiTabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            flex: 1,
            ...sx
          }}
        >
          {items.map((item) => (
            <Tab
              {...(item.amount && {
                icon: (
                  <Box
                    sx={(theme) => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      bgcolor: theme.palette.neutral[50]
                    })}
                  >
                    <Typography variant={'caption'}>{item.amount}</Typography>
                  </Box>
                ),
                iconPosition: 'end'
              })}
              label={item.label}
              id={`tab-${item.id}`}
              aria-controls={`tabpanel-${item.id}`}
              key={`tablist-item-${item.id}`}
              value={item.id}
            />
          ))}
        </MuiTabs>
        {slots?.right}
      </Stack>
      {!items.find((item) => item.id === selectedTab)?.hideStaticContent && slots?.content}
      {items.map((item) => (
        <CustomTab value={selectedTab} id={item.id} key={`tab-content-${item.id}`}>
          {item.element}
        </CustomTab>
      ))}
    </>
  );
});
