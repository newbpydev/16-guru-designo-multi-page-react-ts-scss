import ProjectLinkCard from "../components/cards/ProjectLinkCard";
import "./WebDesignPage.scss";

//* PAGE: WebDesignPage
export default function WebDesignPage() {
  // output
  return (
    <main className="website-page">
      <section className="website-page__hero">hero</section>
      <section className="website-page__websites container">websites</section>
      <section className="website-page__projects container">
        <ProjectLinkCard to="app-design">
          <ProjectLinkCard.Title>App Design</ProjectLinkCard.Title>
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
