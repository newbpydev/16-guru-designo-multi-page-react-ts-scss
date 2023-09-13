import { ReactNode } from "react";
import "./HomeFeatureCard.scss";

type Props = { children: ReactNode };

//* COMPONENT: HomeFeatureCard
export default function HomeFeatureCard({ children }: Props) {
  // output
  return <article className="home-feature-card">{children}</article>;
}

function Title({ children }: Props) {
  return <h3 className="home-feature-card__title">{children}</h3>;
}

function Description({ children }: Props) {
  return <p className="home-feature-card__title">{children}</p>;
}

HomeFeatureCard.Title = Title;
HomeFeatureCard.Description = Description;
