import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";
import "./Gallery.css";

// Import your images
import g1 from "../assets/Gallery/Gallery-1.jpg";
import g2 from "../assets/Gallery/Gallery-2.jpg";
import g3 from "../assets/Gallery/Gallery-3.jpg";
import g4 from "../assets/Gallery/Gallery-4.jpg";
import g5 from "../assets/Gallery/Gallery-5.jpg";
import g6 from "../assets/Gallery/Gallery-6.jpg";


const images = [g1, g2, g3, g4, g5, g6];

const GalleryFull = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index = 0) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <>
      {/* Gallery Preview */}
      <motion.section id="gallery"
        className="gallery-preview text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Container>
          <h2 className="preview-title">Gallery</h2>
          <p className="preview-text">
            A collection of moments we will cherish forever.
          </p>

          <button
            className="gallery-btn"
            onClick={() => openModal(0)}
          >
            View Our Gallery
            <span className="underline"></span>
          </button>
        </Container>
      </motion.section>

      {/* Modal Gallery */}
      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Body
          style={{ position: "relative", padding: 0, background: "#000" }}
        >
          <button
            className="nav-btn left"
            onClick={prevImage}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              fontSize: "3rem",
              color: "#fff",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
          />

          <button
            className="nav-btn right"
            onClick={nextImage}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              fontSize: "3rem",
              color: "#fff",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            ›
          </button>

          <button
            className="close-btn"
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "15px",
              right: "20px",
              fontSize: "1.8rem",
              color: "#fff",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GalleryFull;
