import { Link } from "react-router-dom";
import "./styles.scss";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

//* COMPONENT: Button
export default function Button({ children, to, ...rest }: Props) {
  // output
  return (
    <Link to={to} {...rest} className="button">
      {children}
    </Link>
  );
}
