import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export function Container({ children, className, ...otherProps }: PropsWithChildren<Props>) {
  return (
    <div className={`container mx-auto px-5 py-8 ${className ?? ""}`} {...otherProps}>
      {children}
    </div>
  );
}
