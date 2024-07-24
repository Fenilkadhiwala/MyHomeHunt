import { client } from "../../lib/client";
import { SignupVariablesProps } from "@/interface/ApiInterfaces";
import { createAppUser as createAppUserMutation } from "./mutations";
import { appUserByEmail } from "./queries";

export const createAppUser = async (
  variables: SignupVariablesProps
): Promise<any> => {
  return await client
    .mutate({
      mutation: createAppUserMutation,
      variables,
    })
    .then((result: any) => {
      return result;
    })
    .catch((error: any) => {
      throw error;
    });
};

export const isUserAlreadyRegistered = async (email: string): Promise<any> => {
  return await client
    .query({
      query: appUserByEmail,
      variables: {
        email: email,
      },
      fetchPolicy: "network-only",
    })
    .then((result) => {
      return result?.data?.appUserByEmail?.email;
    })
    .catch((error) => {
      throw error;
    });
};
