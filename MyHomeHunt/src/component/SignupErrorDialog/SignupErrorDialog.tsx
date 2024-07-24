import React from "react";
import { Button, Dialog, Group, Text } from "@mantine/core";

export const SignupErrorDialog = ({
  show,
  setShowSignupError,
  handleSignupAbort,
}: any) => {
  return (
    <Dialog
      opened={show}
      withCloseButton
      onClose={() => setShowSignupError(false)}
      size="lg"
      radius="md"
    >
      <Text size="sm" mb="md" fw={600}>
        Closing this window will abort your registration and any information
        you’ve entered will be lost
      </Text>

      <Group align="flex-end">
        <Button size="xs" color="#f21616" onClick={handleSignupAbort}>
          Close Anyways
        </Button>
      </Group>
    </Dialog>
  );
};
