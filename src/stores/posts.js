import create from "zustand";
import { getPost, getPostBySlug, getPostsByUser } from "../services/api";

export const usePostStore = create((set) => ({
  posts: [],
  post: {},
  loading: false,
  errorMessage: "",
  getPosts: async () => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getPost();
      set(() => ({ posts: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
  getPostBySlug: async (payload) => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getPostBySlug(payload);
      set(() => ({ post: data.value[0], loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
  getPostsByUser: async (payload) => {
    set(() => ({ loading: true }));
    try {
      const { data } = await getPostsByUser(payload);
      set(() => ({ posts: data.value, loading: false }));
    } catch (err) {
      set(() => ({ errorMessage: err, loading: false }));
    }
  },
}));
