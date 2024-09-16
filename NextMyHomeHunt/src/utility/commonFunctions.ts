// import bcrypt from "bcrypt";

export const generateOTP = (length: number): string => {
  const chars = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    otp += chars[randomIndex];
  }

  return otp;
};

// export const generateHash = async (item: string) => {
//   const hashedItem = await bcrypt.hash(item, 10);
//   return hashedItem;
// };
