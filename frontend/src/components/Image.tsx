import React from "react";

interface Props {
  src: string;
  className?: string;
  alt: string;
}

export const makeUrl = (src: string) => `/object/${src}`;

export const Image: React.FC<Props> = ({ src, alt, ...rest }) => (
  <img alt={alt} src={makeUrl(src)} {...rest} />
);
