import { create } from 'zustand';

interface ZoomModeState {
  isZoom: boolean;
  toggleZoomMode: (value?: boolean) => void;
}

export const useZoomModeStore = create<ZoomModeState>((set) => ({
  isZoom: false,
  toggleZoomMode: (value) =>
    set((state) => ({
      isZoom: value !== undefined ? value : !state.isZoom,
    })),
}));
