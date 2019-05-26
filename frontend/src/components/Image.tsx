import React from "react";

interface Props {
  src: string;
  className?: string;
  alt: string;
}

const { REACT_APP_CDN = "" } = process.env;

export const makeUrl = (src: string) => `${REACT_APP_CDN}/object/${src}`;

export const Image: React.FC<Props> = ({ src, alt, ...rest }) => (
  <img alt={alt} src={makeUrl(src)} {...rest} />
);
