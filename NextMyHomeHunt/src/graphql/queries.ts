import { gql } from "@apollo/client";

export const appUserByEmail = gql`
  query appUserByEmail($email: String!) {
    appUserByEmail(email: $email) {
      email
    }
  }
`;
