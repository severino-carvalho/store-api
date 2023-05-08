import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Contexts({ children }: Props) {
  return <div>{children}</div>;
}
