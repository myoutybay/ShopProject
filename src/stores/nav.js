import create from "zustand";

export const useNavStore = create((set) => ({
  activeNav: false,
  showNavbar: () => {
    set((state) => ({ activeNav: !state.activeNav }));
  },
}));
