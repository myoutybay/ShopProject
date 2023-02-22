import create from "zustand";
import { getBanner } from "../services/api";

export const useBannerStore = create((set) => ({
  banners: [],
  loading: false,
  errorMessage: "",
  getBanners: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getBanner();
      set(() => ({ banners: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
}));
