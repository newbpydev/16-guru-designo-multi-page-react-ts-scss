import HomeHeroCard from "../components/cards/HomeHeroCard";
import "./HomePage.scss";

//* PAGE: HomePage
export default function HomePage() {
  // output
  return (
    <main className="home-page">
      <section className="home-page__hero">
        <HomeHeroCard />
      </section>
      <section className="home-page__projects container-mar">projects</section>
      <section className="home-page__features container-mar">features</section>
    </main>
  );
}
