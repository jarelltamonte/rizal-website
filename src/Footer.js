import "./Footer.css";
import { FaFeatherAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        <FaFeatherAlt className="footer-icon" />
        Jose Rizal (1861–1896) is the National Hero of the Philippines. <br /><br />
        This website is designed and made by{" "}
        <span className="footer-name">© Jarell Tamonte</span>
      </p>
      <p className="footer-quote">
        “He who does not know how to look back at where he came from will never get to his destination.”
      </p>
    </div>
  );
};

export default Footer;
