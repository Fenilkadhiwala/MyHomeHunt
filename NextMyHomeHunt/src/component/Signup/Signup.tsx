import {
  TextInput,
  PasswordInput,
  Button,
  LoadingOverlay,
  Loader,
} from "@mantine/core";
import { SignupVariablesProps } from "@/interface/ApiInterfaces";
import { notificationShow } from "@/utility/notification";
import { useDisclosure } from "@mantine/hooks";
// import { isUserAlreadyRegistered } from "@/api/auth/api";
export const Signup = ({ ...signupHook }: any) => {
  const [visible, { toggle }] = useDisclosure(false);

  const isUserExist = async (email: string) => {
    // try {
    //   const result = await isUserAlreadyRegistered(email);
    //   return result;
    // } catch (error) {
    //   console.error("error", error);
    //   notificationShow({
    //     message: "Something went wrong signing up!",
    //     type: "error",
    //   });
    // }
    return false;
  };

  const handleSubmit = async (values: SignupVariablesProps) => {
    const result: any = await isUserExist(values?.email);
    if (!result?.data) {
      toggle();
      signupHook?.setUserSignupDetailsObject(values);
    } else {
      notificationShow({
        message: "Looks like you already have an account with us.",
        type: "warning",
        autoClose: 5000,
      });
    }
  };

  return (
    <form onSubmit={signupHook?.form.onSubmit(handleSubmit)}>
      <LoadingOverlay
        visible={visible}
        loaderProps={{ children: <Loader color="#f21616" type="dots" /> }}
      />
      <span className="flex justify-between mb-3">
        <TextInput
          data-autofocus
          withAsterisk
          label={
            <>
              <span className="font-semibold">First Name</span>
            </>
          }
          placeholder="Enter first name"
          className="mt-5"
          key={signupHook?.form.key("firstName")}
          {...signupHook?.form.getInputProps("firstName", {
            onChange: (e: any) => {
              signupHook?.form.getInputProps("firstName").onChange(e);
              signupHook?.setFormData({
                ...signupHook?.formData,
                firstName: e.target.value,
              });
            },
          })}
        />
        <TextInput
          withAsterisk
          label={
            <>
              <span className="font-semibold">Last Name</span>
            </>
          }
          placeholder="Enter last name"
          className="mt-5"
          key={signupHook?.form.key("lastName")}
          {...signupHook?.form.getInputProps("lastName", {
            onChange: (e: any) => {
              signupHook?.form.getInputProps("lastName").onChange(e);
              signupHook?.setFormData({
                ...signupHook?.formData,
                lastName: e.target.value,
              });
            },
          })}
        />
      </span>
      <span className="flex flex-col gap-3 mb-3">
        <TextInput
          withAsterisk
          label={
            <>
              <span className="font-semibold">Email</span>
            </>
          }
          placeholder="your@gmail.com"
          key={signupHook?.form.key("email")}
          {...signupHook?.form.getInputProps("email", {
            onChange: (e: any) => {
              signupHook?.form.getInputProps("email").onChange(e);
              signupHook?.setFormData({
                ...signupHook?.formData,
                email: e.target.value,
              });
            },
          })}
        />
        <PasswordInput
          withAsterisk
          label={
            <>
              <span className="font-semibold">Set Password</span>
            </>
          }
          placeholder="Enter password"
          key={signupHook?.form.key("password")}
          {...signupHook?.form.getInputProps("password")}
          {...signupHook?.form.getInputProps("password", {
            onChange: (e: any) => {
              signupHook?.form.getInputProps("password").onChange(e);
              signupHook?.setFormData({
                ...signupHook?.formData,
                password: e.target.value,
              });
            },
          })}
        />
      </span>
      <Button fullWidth type="submit" color="#f21616" className="mb-4">
        Sign up
      </Button>
    </form>
  );
};
