import { axiosInstance } from "../config";

export const getBanks = async () => {
  return await axiosInstance.get("/Banks");
};
