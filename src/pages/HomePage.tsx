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
        <HomeFeatureCard feature="passionate">
          <HomeFeatureCard.Title>Passionate</HomeFeatureCard.Title>
          <HomeFeatureCard.Description>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </HomeFeatureCard.Description>
        </HomeFeatureCard>

        <HomeFeatureCard feature="resourceful">
          <HomeFeatureCard.Title>Resourceful</HomeFeatureCard.Title>
          <HomeFeatureCard.Description>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </HomeFeatureCard.Description>
        </HomeFeatureCard>

        <HomeFeatureCard feature="friendly">
          <HomeFeatureCard.Title>Friendly</HomeFeatureCard.Title>
          <HomeFeatureCard.Description>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </HomeFeatureCard.Description>
        </HomeFeatureCard>
      </section>
    </main>
  );
}
