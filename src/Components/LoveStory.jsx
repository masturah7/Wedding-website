import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoveStory = () => {
  return (
    <Container  id="story" fluid className="love-story ">
      <h2 className="love-title text-center">Our Love Story</h2>

      <div className="story-divider">❦ ❦ ❦</div>

      <Row className="p-5">
        <Col xs={12}  md={6}>
          <div className="story-card">
            <h3 className="story-role">Samuel’s Story</h3>
            <p className="story-text  fs-5">
              <span className="drop-cap">O</span> ur story is one of friendship and divine timing. We had known each other for years, 
              serving together and sharing life’s moments. There was always a natural ease in our 
              connection, no matter how much time passed.
            </p>
            <p className="story-text fs-5">
              At first, I couldn’t imagine us as anything more than good friends. Even when the 
              thought appeared, I dismissed it. But with time, God brought clarity and peace, and 
            friendship gradually revealed itself as love.
            </p>
            <p className="story-text  fs-5"> Now, we laugh at how unexpected our journey has been. We are thankful to God and 
            excited to begin this new chapter together. </p>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="story-card">
            <h3 className="story-role">Abigael’s Story</h3>
            <p className="story-text  fs-5">
              <span className="drop-cap">I</span>t was a new phase in my life, and Samuel was always checking in on me.
                What stood out was the shift in his intentionality — not just as a friend, but as someone 
                who truly cared. We started talking every day, and I found myself growing fond of him.
            </p>
            <p className="story-text  fs-5">
              I had always known I would marry someone from my close circle; I just didn’t know who. 
              Through prayer and repeated confirmations, clarity came. Looking back now, I can see 
              how God was leading all along.
            </p>
            <p className="story-text  fs-5"> Today, I am grateful to be marrying my best friend — the love of my life. </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoveStory;
