import React from "react";
import { Modal } from "@mantine/core";
import { AuthTabs } from "../AuthTabs";
import { useSignupForm } from "@/hook/useSignupForm";

interface LoginSignupInterface {
  show: boolean;
  handleClose: () => void;
}

export const LoginSignupModal: React.FC<LoginSignupInterface> = ({
  show,
  handleClose,
}) => {
  const signupHook = useSignupForm(() => handleClose());

  return (
    <>
      <Modal
        opened={show}
        onClose={signupHook.handleModalClosing}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
        transitionProps={{ transition: "fade-down" }}
        closeOnClickOutside={false}
      >
        <AuthTabs {...signupHook} />
      </Modal>
    </>
  );
};
