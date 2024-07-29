import React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
interface FooterIconProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}
const FooterIcon = ({
  href,
  children,
  ...props
}: FooterIconProps): JSX.Element => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default FooterIcon;
