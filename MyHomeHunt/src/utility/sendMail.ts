import axios from "axios";
import path from "path";

export const sendMail = async (
  to: string,
  subject: string,
  context: object,
  emailTemplate: string
) => {
  try {
    const response = await axios.post("/api/utils", {
      to,
      subject,
      context,
      emailTemplate,
    });

    return response?.data;
  } catch (error) {
    console.error("Failed to send email", error);
    throw new Error("Failed to send email");
  }
};
