import "./Footer.css";
import { FaEnvelope, FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="brand-block">
          <div className="brand-name">Balaji C S</div>
          <p>Creating meaningful digital experiences through technology.</p>
        </div>

        <div className="social-block">
          <a href="https://github.com/BalajiCS6363" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/balaji-c-s-9ba20a42b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=balajibalu2102003@gmail.com&su=Portfolio%20Contact"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span>Made with <FaHeart /> by Balaji C S</span>
      </div>
    </footer>
  );
}

export default Footer;
