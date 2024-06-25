"use server";

import { axiosInstance } from "@services/api";
import { Post } from "./posts.type";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const { data } = await axiosInstance.get<Post[]>("posts");
    return data.slice(4, 9);
  } catch (err) {
    throw err;
  }
};
