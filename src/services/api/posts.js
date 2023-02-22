import { axiosInstance } from "../config";

export const getPost = async () => {
  return await axiosInstance.get("/Posts", {
    params: {
      $top: 3,
      $filter: "State eq 'Approved'",
      $expand: "Category,Field,User($expand=Employee)",
    },
  });
};
export const getPostBySlug = async (payload) => {
  return await axiosInstance.get("/Posts", {
    params: {
      $filter: "Slug eq '" + payload + "' and State eq 'Approved'",
      $expand:
        "Category,Field,EnglishPost($expand=Category,Field,User($expand=Employee($expand=Position))),User($expand=Employee($expand=Position))",
    },
  });
};

export const getPostsByUser = async (payload) => {
  return await axiosInstance.get("/Posts", {
    params: {
      $filter: "User/Oid eq " + payload + " and State eq 'Approved'",
      $expand: "Category,PostImages",
    },
  });
};

export const postPost = async () => {
  return await axiosInstance.get(``);
};
export const putPost = async () => {
  return await axiosInstance.get(``);
};
export const deletePost = async () => {
  return await axiosInstance.get(``);
};
