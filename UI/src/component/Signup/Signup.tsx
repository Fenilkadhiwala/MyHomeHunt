import { useSignupForm } from "@/hook/useSignupForm";
import { TextInput, PasswordInput, Button } from "@mantine/core";
import React from "react";

export const Signup = () => {
  const { form } = useSignupForm();

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
          key={form.key("firstName")}
          {...form.getInputProps("firstName")}
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
          key={form.key("lastName")}
          {...form.getInputProps("lastName")}
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
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label={
            <>
              <span className="font-semibold">Set Password</span>
            </>
          }
          placeholder="Enter password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
      </span>
      <Button fullWidth type="submit" color="#f21616" className="mb-4">
        Sign up
      </Button>
    </form>
  );
};
