import { create } from 'zustand';

interface SelectedItemState {
  selectedItem: number;
  toggleSelectedItem: (itemId: number) => void;
}

export const useSelectedItemStore = create<SelectedItemState>((set) => ({
  selectedItem: 0,
  toggleSelectedItem: (itemId: number) =>
    set((state) => ({
      selectedItem: state.selectedItem === itemId ? itemId : itemId,
    })),
}));
