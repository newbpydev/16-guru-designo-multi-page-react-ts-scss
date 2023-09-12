import Button from "../../buttons/Button";
import "./ContactCard.scss";

//* COMPONENT: ContactCard
export default function ContactCard() {
  // output
  return (
    <article className="contact-card">
      <h1 className="contact-card__title">
        Let&apos;s talk about your project
      </h1>

      <p className="contact-card__message">
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>

      <Button to="/contact">Get In Touch</Button>
    </article>
  );
}
