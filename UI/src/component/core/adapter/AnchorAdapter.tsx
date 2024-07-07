import { Anchor, AnchorProps } from "@mantine/core";
import React from "react";

export interface AnchorExtendedProps extends AnchorProps {
  children: React.ReactNode;
  href: string;
}

export const AnchorAdapter: React.FC<AnchorExtendedProps> = ({
  children,
  ...props
}) => {
  return <Anchor {...props}>{children}</Anchor>;
};
