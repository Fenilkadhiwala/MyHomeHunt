import { gql } from "@apollo/client";

export const createAppUser = gql`
  mutation createAppUser($input: CreateAppUserInput!) {
    createAppUser(input: $input) {
      appUser {
        userId
      }
    }
  }
`;
