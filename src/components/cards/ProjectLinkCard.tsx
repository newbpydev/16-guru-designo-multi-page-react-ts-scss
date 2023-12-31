import { AnchorHTMLAttributes, ReactNode } from "react";
import "./ProjectLinkCard.scss";
import { Link } from "react-router-dom";

// import rightArrow from "/assets/shared/desktop/icon-right-arrow.svg";

interface ChildrenProps {
  children?: ReactNode;
}

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: "web-design" | "app-design" | "graphic-design";
  children: ReactNode;
}

//* COMPONENT: ProjectLinkCard
export default function ProjectLinkCard({ to, children, ...rest }: Props) {
  // output
  return (
    <Link
      to={`/designs/${to}`}
      className="project-link-card"
      data-bg={to}
      {...rest}
    >
      <div className="project-link-card__wrapper">{children}</div>
    </Link>
  );
}

function Title({ children }: ChildrenProps) {
  return <h2 className="project-link-card__title">{children}</h2>;
}

function Subtitle({ children = "View Projects" }: ChildrenProps) {
  return (
    <p className="project-link-card__subtitle">
      {children}{" "}
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#E7816B"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </p>
  );
}

ProjectLinkCard.Title = Title;
ProjectLinkCard.Subtitle = Subtitle;
