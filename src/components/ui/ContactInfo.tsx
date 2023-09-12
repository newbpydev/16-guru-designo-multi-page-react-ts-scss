import { ReactNode } from "react";
import "./ContactInfo.scss";

type Props = {
  children: ReactNode;
  isDarkMode: boolean;
};

//* COMPONENT: ContactInfo
export default function ContactInfo({ children, isDarkMode }: Props) {
  // output
  return (
    <div className={`contact-info ${isDarkMode && "dark-mode"}`}>
      {children}
    </div>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return <p className="contact-info__heading">{children}</p>;
}

function Text({ children }: { children: ReactNode }) {
  return <p className="contact-info__text">{children}</p>;
}

ContactInfo.Heading = Heading;
ContactInfo.Text = Text;
