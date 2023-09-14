import Button from "../buttons/Button";
import "./HomeHeroCard.scss";

//* COMPONENT: HomeHeroCard
export default function HomeHeroCard() {
  // output
  return (
    <div className="home-hero-card">
      <div className="home-hero-card__cta-details">
        <h1 className="home-hero-card__title">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="home-hero-card__detail">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>

        <Button to="/about">Learn More</Button>
      </div>

      <img
        src="/assets/home/desktop/image-hero-phone.png"
        alt="image of a phone"
        className="home-hero-card__img"
      />
    </div>
  );
}
