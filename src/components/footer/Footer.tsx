import MainNavBar from "../navbar/MainNavBar";
import ContactInfo from "../ui/ContactInfo";
import Logo from "../ui/Logo";
import "./Footer.scss";

//* COMPONENT: Footer
export default function Footer() {
  // output
  return (
    <footer className="footer">
      <div className="footer__contact-us">get_in_touch</div>

      <div className="footer__group">
        <Logo isDarkMode />

        <MainNavBar isFooter />

        <div className="footer__contact-info">
          <ContactInfo isDarkMode>
            <ContactInfo.Heading>Designo Central Office</ContactInfo.Heading>
            <ContactInfo.Text>3886 Wellington Street</ContactInfo.Text>
            <ContactInfo.Text>Toronto, Ontario M9C 3J5</ContactInfo.Text>
          </ContactInfo>

          <ContactInfo isDarkMode>
            <ContactInfo.Heading>
              Contact Us (Central Office)
            </ContactInfo.Heading>
            <ContactInfo.Text>P : +1 253-863-8967</ContactInfo.Text>
            <ContactInfo.Text>M : contact@designo.co</ContactInfo.Text>
          </ContactInfo>
        </div>

        <div className="footer__social-group">social</div>
      </div>
    </footer>
  );
}
