import React from "react";

type SizeType = "sm" | "md" | "auto";
type SizesType = { [K in SizeType]: string | number };

const sizes: SizesType = {
  sm: 128,
  md: 256,
  auto: "auto"
};

interface Props {
  src: string;
  className?: string;
  alt: string;
  size?: SizeType;
}

export const makeUrl = (uri: string) => `/object/${uri}`;

export const Image: React.FC<Props> = ({
  src,
  size = "auto",
  alt,
  className,
  ...rest
}) => (
  <img alt={alt} style={{ width: sizes[size] }} src={makeUrl(src)} {...rest} />
);
