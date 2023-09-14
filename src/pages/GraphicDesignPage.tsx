import ProjectLinkCard from "../components/cards/ProjectLinkCard";
import "./GraphicDesignPage.scss";

//* PAGE: GraphicDesignPage
export default function GraphicDesignPage() {
  // output
  return (
    <main className="graphic-design-page">
      <section className="graphic-design-page__hero">hero</section>
      <section className="graphic-design-page__websites">websites</section>
      <section className="graphic-design-page__projects">
        <ProjectLinkCard to="web-design">
          <ProjectLinkCard.Title>Web Design</ProjectLinkCard.Title>
          <ProjectLinkCard.Subtitle></ProjectLinkCard.Subtitle>
        </ProjectLinkCard>

        <ProjectLinkCard to="app-design">
          <ProjectLinkCard.Title>App Design</ProjectLinkCard.Title>
          <ProjectLinkCard.Subtitle></ProjectLinkCard.Subtitle>
        </ProjectLinkCard>
      </section>
    </main>
  );
}
