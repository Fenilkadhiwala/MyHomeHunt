import { useForm } from "@mantine/form";

export const useSignupForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },

    validate: {
      firstName: (value) => (!value ? "Please enter the first name" : null),
      lastName: (value) => (!value ? "Please enter the last name" : null),
      email: (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? null
          : "Enter a valid email",

      password: (value) =>
        !value ||
        value.length < 8 ||
        !/[A-Z]/.test(value) ||
        !/[0-9]/.test(value) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(value)
          ? "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character"
          : null,
    },

    validateInputOnChange: true,
  });

  return { form };
};
