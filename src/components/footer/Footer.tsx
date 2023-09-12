import ContactCard from "../cards/ContactCard";
import MainNavBar from "../navbar/MainNavBar";
import ContactInfo from "../ui/ContactInfo";
import Logo from "../ui/Logo";
import SocialLink from "../ui/SocialLink";
import "./Footer.scss";

//* COMPONENT: Footer
export default function Footer() {
  // output
  return (
    <footer className="footer">
      <div className="footer__upper-group ">
        <div className="footer__contact-us">
          <ContactCard />
        </div>

        <Logo isDarkMode />
      </div>

      <div className="footer__lower-group">
        <MainNavBar isFooter />

        <div className="footer__contact-group">
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

        <div className="footer__social-group">
          <SocialLink media="facebook" />
          <SocialLink media="youtube" />
          <SocialLink media="twitter" />
          <SocialLink media="pinterest" />
          <SocialLink media="instagram" />
        </div>
      </div>
    </footer>
  );
}
