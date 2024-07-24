import bcrypt from "bcrypt";
import { createAppUser, isUserAlreadyRegistered } from "@/app/graphql/api";
import { headers } from "next/headers";

export const GET = async () => {
  try {
    const headerList = headers();
    const email: any = headerList.get("email");
    const response = await isUserAlreadyRegistered(email);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    const errorResponse = {
      message: error.message,
      ...(error.response && {
        status: error.response.status,
        data: error.response.data,
      }),
    };

    return new Response(JSON.stringify(errorResponse), {
      status: error.response?.status ?? 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const userSignupData: any = await req.json();
    const variables = await getVariables(userSignupData);
    const response = await createAppUser(variables);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    const errorResponse = {
      message: error.message,
      ...(error.response && {
        status: error.response.status,
        data: error.response.data,
      }),
    };

    return new Response(JSON.stringify(errorResponse), {
      status: error.response?.status ?? 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

const getVariables = async (data: any) => {
  data.password = await generateHash(data.password);
  const variables: any = {
    input: {
      appUser: data,
    },
  };
  return variables;
};

const generateHash = async (value: string): Promise<string> => {
  const hashedValue = await bcrypt.hash(value, 10);
  return hashedValue;
};
