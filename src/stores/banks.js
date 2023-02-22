import create from "zustand";
import { getBanks } from "../services/api";

export const useBankStore = create((set) => ({
  banks: [],
  loading: false,
  errorMessage: "",
  getBanks: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getBanks();
      set(() => ({ banks: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
}));
