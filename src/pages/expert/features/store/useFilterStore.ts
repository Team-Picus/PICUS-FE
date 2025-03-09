import { create } from 'zustand';

interface FilterState {
  // 가격 필터 (라디오 버튼 or 직접 입력)
  price: string | { min: number; max: number } | null;
  setPrice: (price: string | { min: number; max: number } | null) => void;
  resetPrice: () => void;

  // 지역 필터 (시/도, 시/군/구, 외부 촬영 여부)
  region: { city?: string; district?: string; isOutdoor?: boolean };
  setRegion: (region: { city?: string; district?: string; isOutdoor?: boolean }) => void;
  resetRegion: () => void;

  // 테마 필터 (다중 선택 가능)
  themes: string[];
  addTheme: (theme: string) => void;
  removeTheme: (theme: string) => void;
  resetThemes: () => void;

  // 필터 전체 초기화
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  // 가격 필터
  price: null,
  setPrice: (price) => set({ price }),
  resetPrice: () => set({ price: null }),

  // 지역 필터
  region: { city: '', district: '', isOutdoor: false },
  setRegion: (region) => set({ region }),
  resetRegion: () => set({ region: { city: '', district: '', isOutdoor: false } }),

  // 테마 필터 (다중 선택)
  themes: [],
  addTheme: (theme) =>
    set((state) => ({
      themes: state.themes.includes(theme) ? state.themes : [...state.themes, theme],
    })),
  removeTheme: (theme) =>
    set((state) => ({
      themes: state.themes.filter((item) => item !== theme),
    })),
  resetThemes: () => set({ themes: [] }),

  // 필터 전체 초기화
  resetFilters: () =>
    set({
      price: null,
      region: { city: '', district: '', isOutdoor: false },
      themes: [],
    }),
}));