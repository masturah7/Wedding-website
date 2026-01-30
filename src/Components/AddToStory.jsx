import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const AddToStory = () => {
  return (
    <Container id="add" fluid className="story-section my-5 text-center">
      <h2 className="story-title">Add to Our Story</h2>

      <div className="story-divider"></div>

      <p className="story-hashtag">#ForeverWithAS26</p>

      <p className="story-text">
        Help us make this celebration even more memorable.
      </p>

      <p className="story-subtext">
        Share your favorite photos and moments from our special day and be part
        of our story.
      </p>

      <Button className="story-btn mt-4">
        Add Now
      </Button>
    </Container>
  );
};

export default AddToStory;
