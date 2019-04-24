import React from "react";

interface Props {
  src: string;
  className?: string;
  alt: string;
}

export const makeUrl = (uri: string) => `/object/${uri}`;

export const Image: React.FC<Props> = ({ src, alt, className, ...rest }) => (
  <img alt={alt} src={makeUrl(src)} {...rest} />
);
