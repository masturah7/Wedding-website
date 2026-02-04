import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddToStory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pdfUrl = `${import.meta.env.BASE_URL}Program.pdf`;

  return (
    <>
      <Container id="add" fluid className="story-section my-5 text-center">
        <h2 className="story-title">Add to Our Story</h2>

        <div className="story-divider"></div>

        <p className="story-hashtag">#ForeverWithAS26</p>

        <p className="story-text">
          Help us make this celebration even more memorable.
        </p>

        <p className="story-subtext">
          Share your favorite photos and moments from our special day.
        </p>

        {/* Add Now Button */}
        <Button className="story-btn mt-4" onClick={handleShow}>
          Add Now
        </Button>
      </Container>

      {/* Modal Popup */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton >
          <Modal.Title className="modal-title">Our Program</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          <p>
            Click below to view the full order of program for our special day.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button href={pdfUrl} target="_blank" variant="dark">
              View Program
            </Button>

            <Button href={pdfUrl} download variant="outline-dark">
              Download Program
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddToStory;
