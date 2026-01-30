import Container from "react-bootstrap/Container";
import { HeartFill } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="wedding-footer text-center">
      <Container fluid className="text-center">
        <p className="footer-text">
          © 2026 Ayodele Abigael Feranmi &amp; Akande Samuel Olalekan  Made with <HeartFill className="footer-heart" />
        </p>

        
      </Container>
    </footer>
  );
};

export default Footer;
