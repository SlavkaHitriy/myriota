import { create } from 'zustand';

export interface ISidebarStore {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useStore = create<ISidebarStore>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
}));
