export const createAppUser = `
  mutation createAppUser($input: CreateAppUserInput!) {
    createAppUser(input: $input) {
      appUser {
        userId
      }
    }
  }
`;
