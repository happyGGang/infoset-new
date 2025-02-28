import { create } from 'zustand';

interface BubbleAStore {
  selectedBubbleItems: string[];
  toggleSelectedBubbleItem: (itemId: string) => void;
}

export const useBubbleAStore = create<BubbleAStore>((set) => ({
  selectedBubbleItems: [],
  toggleSelectedBubbleItem: (itemId: string) =>
    set((state) => {
      const isSelected = state.selectedBubbleItems.includes(itemId);
      if (isSelected) {
        return {
          selectedBubbleItems: state.selectedBubbleItems.filter(
            (id) => id !== itemId
          ),
        };
      } else if (state.selectedBubbleItems.length < 3) {
        return {
          selectedBubbleItems: [...state.selectedBubbleItems, itemId],
        };
      }
      return state;
    }),
}));
