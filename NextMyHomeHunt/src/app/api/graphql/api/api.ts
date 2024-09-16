import axios from "axios";
import { createAppUser } from "../mutation";
const url = "http://localhost:3000/api/graphql";

export const createUser = async (variables: any) => {
  try {
    const response: any = await axios({
      data: {
        query: createAppUser,
        variables,
      },
      method: "post",
      url,
    });
    console.log("res****************", response);
  } catch (error) {
    console.log("errrr", error);
    throw error;
  }
};
