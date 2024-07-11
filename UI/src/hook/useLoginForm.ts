import { useForm } from "@mantine/form";

export const useLoginForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? null
          : "Enter a valid email",

      password: (value) =>
        value?.length !== 0 ? null : "Please enter the password",
    },

    validateInputOnChange: true,
  });

  return { form };
};
