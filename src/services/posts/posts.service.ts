"use server";

import { axiosInstance } from "@services/api";
import { Post } from "./posts.type";

export const posts = async (): Promise<Post[]> => {
  try {
    const { data } = await axiosInstance.get<Post[]>("posts");
    return data;
  } catch (err) {
    throw err;
  }
};
