import { client } from "../lib/client";
import { SignupVariablesProps } from "@/interface/ApiInterfaces";
import { createAppUser as createAppUserMutation } from "./mutations";
import { appUserByEmail } from "./queries";

export const createAppUser = async (): Promise<any> => {
  const variables = {
    input: {
      appUser: {
        email: "fenil@gmail.com",
        password: "Dwjhe@3938",
        firstName: "fjk",
        lastName: "jk",
      },
    },
  };
  return await client
    .mutate({
      mutation: createAppUserMutation,
      variables,
    })
    .then((result: any) => {
      console.log("result", result);
      return result;
    })
    .catch((error: any) => {
      console.log("first", error);
      throw error;
    });
};

// export const isUserAlreadyRegistered = async (email: string): Promise<any> => {
//   return await client
//     .query({
//       query: appUserByEmail,
//       variables: {
//         email: email,
//       },
//       fetchPolicy: "network-only",
//     })
//     .then((result) => {
//       return result?.data?.appUserByEmail?.email;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };
