import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Wedding = () => {
  return (
    <Container id="wedding" fluid  className="wedding-section  text-center">
      <h2 className="wedding-title">The Wedding</h2>

      <div className="wedding-double-line"></div>

      <div className="wedding-card mx-auto">
        <div className="wedding-item">
          <h4>Date</h4>
          <p>Friday, February 27, 2026</p>
        </div>

        <div className="wedding-item">
          <h4>Ceremony</h4>
          <p>Details will be shared soon.</p>
        </div>

        <div className="wedding-item">
          <h4>Reception</h4>
          <p>Details will be shared soon.</p>
        </div>

        <Button className="wedding-btn mt-4">
          Live Direction
        </Button>
      </div>
    </Container>
  );
};

export default Wedding;
