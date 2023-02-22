import { axiosInstance } from "../config";

export const getProduct = async () => {
  return await axiosInstance.get("/Products", {
    params: {
      $filter: "State eq 'Approved'",
      $expand:
        "Category,ProductImages,User($expand=Employee($expand=Position)),TutorialStandard",
    },
  });
};

export const getProductsByName = async (payload) => {
  return await axiosInstance.get("/Products", {
    params: {
      $select: "ProductName,Slug",
      $filter:
        "(contains(tolower(ProductName),'" +
        payload +
        "'))and State eq 'Approved'",
    },
  });
};
export const getAllProductsByName = async (payload) => {
  return await axiosInstance.get("/Products", {
    params: {
      $filter:
        "(contains(tolower(ProductName),'" +
        payload +
        "'))and State eq 'Approved'",
      $expand:
        "Category,ProductImages,User($expand=Employee($expand=Position)),TutorialStandard",
    },
  });
};

export const getProductBySlug = async (payload) => {
  return await axiosInstance.get("/Products", {
    params: {
      $filter: "Slug eq '" + payload + "' and State eq 'Approved'",
      $expand:
        "Category,ProductImages,User($expand=Employee($expand=Position)),TutorialStandard",
    },
  });
};

export const getProductsByUser = async (payload) => {
  return await axiosInstance.get("/Products", {
    params: {
      $filter: "User/Oid eq " + payload + " and State eq 'Approved'",
      $expand: "Category,ProductImages",
    },
  });
};

export const postProduct = async () => {
  return await axiosInstance.get(``);
};
export const putProduct = async () => {
  return await axiosInstance.get(``);
};
export const deleteProduct = async () => {
  return await axiosInstance.get(``);
};
