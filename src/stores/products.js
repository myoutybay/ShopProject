import create from "zustand";
import {
  getProduct,
  getProductBySlug,
  getProductsByName,
  getAllProductsByName,
  getProductsByUser,
} from "../services/api";

export const useProductStore = create((set) => ({
  seachProducts: [],
  products: [],
  product: {},
  loading: false,
  errorMessage: "",
  getProducts: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getProduct();
      set(() => ({ products: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
  getProductsByName: async (payload) => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getProductsByName(payload);
      set(() => ({ seachProducts: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
  getAllProductsByName: async (payload) => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getAllProductsByName(payload);
      set(() => ({ products: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
  getProductBySlug: async (payload) => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getProductBySlug(payload);
      set(() => ({ product: data.value[0], loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
  getProductsByUser: async (payload) => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getProductsByUser(payload);
      set(() => ({ products: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
}));
