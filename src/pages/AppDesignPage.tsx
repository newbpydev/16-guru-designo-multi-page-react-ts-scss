import ProjectLinkCard from "../components/cards/ProjectLinkCard";
import "./AppDesignPage.scss";

//* PAGE: AppDesignPage
export default function AppDesignPage() {
  // output
  return (
    <main className="app-design-page">
      <section className="app-design-page__hero">hero</section>
      <section className="app-design-page__websites">websites</section>
      <section className="app-design-page__projects">
        <ProjectLinkCard to="web-design">
          <ProjectLinkCard.Title>Web Design</ProjectLinkCard.Title>
          <ProjectLinkCard.Subtitle></ProjectLinkCard.Subtitle>
        </ProjectLinkCard>

        <ProjectLinkCard to="graphic-design">
          <ProjectLinkCard.Title>Graphic Design</ProjectLinkCard.Title>
          <ProjectLinkCard.Subtitle></ProjectLinkCard.Subtitle>
        </ProjectLinkCard>
      </section>
    </main>
  );
}
