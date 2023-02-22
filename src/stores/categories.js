import create from "zustand";
import { getCategory } from "../services/api";

export const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  errorMessage: "",
  getCategories: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getCategory();
      set(() => ({ categories: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
}));
