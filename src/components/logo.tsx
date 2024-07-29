import React from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";

interface LogoProps extends ImageProps {}

const Logo = ({ src, alt, ...props }: LogoProps): JSX.Element => {
  return <Image src={src} alt={alt} {...props} />;
};

export default Logo;
