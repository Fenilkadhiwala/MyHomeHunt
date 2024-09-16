import { useForm } from "@mantine/form";
import { validateEmail, validatePassword } from "@/utility/validationRules";

export const useLoginForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: validateEmail,
      password: validatePassword,
    },

    validateInputOnChange: true,
  });

  return { form };
};
