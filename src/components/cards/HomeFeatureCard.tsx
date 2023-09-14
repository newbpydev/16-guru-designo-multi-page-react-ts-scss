import { ReactNode } from "react";
import "./HomeFeatureCard.scss";

type Props = {
  children: ReactNode;
  feature: "passionate" | "resourceful" | "friendly";
};

type ChildrenProps = {
  children: ReactNode;
};

//* COMPONENT: HomeFeatureCard
export default function HomeFeatureCard({ children, feature }: Props) {
  return (
    <article className="home-feature-card">
      <img
        src={`assets/home/desktop/illustration-${feature}.svg`}
        alt={`illustration of ${feature}`}
        className="home-feature-card__image"
      />

      <div className="home-feature-card__group">{children}</div>
    </article>
  );
}

function Title({ children }: ChildrenProps) {
  return <h3 className="home-feature-card__title">{children}</h3>;
}

function Description({ children }: ChildrenProps) {
  return <p className="home-feature-card__description">{children}</p>;
}

HomeFeatureCard.Title = Title;
HomeFeatureCard.Description = Description;
