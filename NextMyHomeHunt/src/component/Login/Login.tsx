import { TextInput, PasswordInput, Button } from "@mantine/core";
import React from "react";
import { useLoginForm } from "@/hook/useLoginForm";

export const Login = () => {
  const { form } = useLoginForm();

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <span className="flex flex-col gap-5">
        <TextInput
          data-autofocus
          withAsterisk
          label={
            <>
              <span className="font-semibold">Email</span>
            </>
          }
          placeholder="your@gmail.com"
          className="mt-5"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label={
            <>
              <span className="font-semibold">Password</span>
            </>
          }
          placeholder="Enter password"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button type="submit" color="#f21616" className="mb-4">
          Sign in
        </Button>
      </span>
    </form>
  );
};
