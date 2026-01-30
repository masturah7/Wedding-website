import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "react-bootstrap/Container";

import memo1 from "../assets/memo-1.jpg";
import memo2 from "../assets/memo-2.jpg";
import memo3 from "../assets/memo-3.jpg";
import memo4 from "../assets/memo-4.jpg";
import memo5 from "../assets/memo-5.jpg";

const memories = [
  { image: memo1, caption: "Attended a wedding together" },
  { image: memo2, caption: "Picture of us" },
  { image: memo3, caption: "Visit to Buckingham Palace" },
  { image: memo4, caption: "Abigael's Valedictory service" },
  { image: memo5, caption: "Abigael's Graduation" },
];

const swipeConfidenceThreshold = 100;

const Memories = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (prev === null) return 0;
      return (prev + newDirection + memories.length) % memories.length;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "Escape") setCurrentIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <Container id="memories" fluid className="p-5 text-center memory-color">
      <motion.h2
        className="mb-4 motion-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Memories
      </motion.h2>
      <motion.p className="motion-p">Every moment has been a step toward this day.
These memories capture the journey, laughter, and love that brought us here.</motion.p>

      <div className="memories-heart">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className={`heart-img img-${index + 1}`}
            whileHover={{ scale: 1.1 }}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={memory.image} alt={memory.caption} />
            <div className="memory-overlay">
              <p>{memory.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence initial={false} custom={direction}>
        {currentIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
          >
            <motion.div
              className="lightbox-content"
              custom={direction}
              initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 200 : -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setCurrentIndex(null)}>
                ✕
              </button>

              <button className="nav-btn left" onClick={() => paginate(-1)}>
                ‹
              </button>
              <button className="nav-btn right" onClick={() => paginate(1)}>
                ›
              </button>

              <img
                src={memories[currentIndex].image}
                alt={memories[currentIndex].caption}
              />
              <p>{memories[currentIndex].caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Memories;
