import HomeFeatureCard from "../components/cards/HomeFeatureCard";
import HomeHeroCard from "../components/cards/HomeHeroCard";
import ProjectLinkCard from "../components/cards/ProjectLinkCard";
import "./HomePage.scss";

//* PAGE: HomePage
export default function HomePage() {
  // output
  return (
    <main className="home-page">
      <section className="home-page__hero">
        <HomeHeroCard />
      </section>

      <section className="home-page__projects container-mar">
        <ProjectLinkCard to="web-design">
          <ProjectLinkCard.Title>Web Design</ProjectLinkCard.Title>
          <ProjectLinkCard.Subtitle></ProjectLinkCard.Subtitle>
        </ProjectLinkCard>

        <ProjectLinkCard to="app-design">
          <ProjectLinkCard.Title>App Design</ProjectLinkCard.Title>
          <ProjectLinkCard.Subtitle></ProjectLinkCard.Subtitle>
        </ProjectLinkCard>

        <ProjectLinkCard to="graphic-design">
          <ProjectLinkCard.Title>Graphic Design</ProjectLinkCard.Title>
          <ProjectLinkCard.Subtitle></ProjectLinkCard.Subtitle>
        </ProjectLinkCard>
      </section>

      <section className="home-page__features container-mar">
        <HomeFeatureCard></HomeFeatureCard>
      </section>
    </main>
  );
}
