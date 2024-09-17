import { Image, ImageProps } from "@mantine/core";

import React from "react";

export const ImageAdapter: React.FC<ImageProps> = ({ ...props }) => {
  return <Image {...props} />;
};
