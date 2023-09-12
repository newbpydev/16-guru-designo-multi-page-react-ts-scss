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
      <Logo isDarkMode />
      <MainNavBar isFooter />

      <div className="footer__contact-info">
        <ContactInfo isDarkMode>hi</ContactInfo>
      </div>
    </footer>
  );
}
