import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { AuthTabs } from "../AuthTabs";

interface LoginSignupInterface {
  show: boolean;
  handleClose: () => void;
}

export const LoginSignupModal: React.FC<LoginSignupInterface> = ({
  show,
  handleClose,
}) => {
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      <Modal
        size="md"
        opened={show}
        onClose={handleClose}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        fullScreen={isMobile}
        centered
        transitionProps={{ transition: "fade-down" }}
      >
        <AuthTabs />
      </Modal>
    </>
  );
};
