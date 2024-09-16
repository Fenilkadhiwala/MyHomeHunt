import { createUser } from "../../api/api";

export const createAppUser = {
  Mutation: {
    createAppUser: async (parent: any, args_: any, context: any, info: any) => {
      try {
        const res = await createUser(args_);
        console.log("hii f");
        return {
          appUser: {
            userId: "placeholder-user-id",
          },
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
