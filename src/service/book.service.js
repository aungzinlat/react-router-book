import { api } from "./baseUrl";

export const GetBookData = async (arg) => {
  try {
    const { data } = await api.get(arg);
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
