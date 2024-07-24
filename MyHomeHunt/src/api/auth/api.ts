import axios from "axios";

export const createAppUser = async (userSignupDetails: any) => {
  try {
    const result = await axios.post("/api/createAppUser", userSignupDetails);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const isUserAlreadyRegistered = async (email: any) => {
  try {
    const result = await axios.get("/api/createAppUser", {
      headers: {
        email: email,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
