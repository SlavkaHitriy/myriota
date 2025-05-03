import { Tabs as MuiTabs, Tab, SxProps, Theme, Stack } from '@mui/material';
import { memo, SyntheticEvent, useCallback, useState } from 'react';

import { CustomTab } from './components/CustomTab';
import * as React from 'react';

export interface ITabItem {
  id: number;
  label: string;
  element: React.ReactNode;
}

interface ITabsProps {
  items: ITabItem[];
  sx?: SxProps<Theme>;
  defaultTab?: number;
}

export const Tabs: React.FC<ITabsProps> = memo(({ items, sx, defaultTab }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab ?? items[0].id);

  const handleTabChange = useCallback((_: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  }, []);

  return (
    <Stack gap={'24px'} overflow={'hidden auto'}>
      <MuiTabs
        value={selectedTab}
        onChange={handleTabChange}
        variant={'scrollable'}
        scrollButtons={false}
        sx={{
          overflow: 'visible',
          ...sx
        }}
      >
        {items.map((item) => (
          <Tab
            label={item.label}
            id={`tab-${item.id}`}
            aria-controls={`tabpanel-${item.id}`}
            key={`tablist-item-${item.id}`}
            value={item.id}
          />
        ))}
      </MuiTabs>
      {items.map((item) => (
        <CustomTab value={selectedTab} id={item.id} key={`tab-content-${item.id}`}>
          {item.element}
        </CustomTab>
      ))}
    </Stack>
  );
});
