import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import toast from "../assets/Toast.jpg";

const Toast = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const refreshed = sessionStorage.getItem("hasRefreshed");

    if (refreshed) {
      // Normal scroll navigation → allow animation
      setShouldAnimate(true);
    } else {
      // First page load / refresh → no animation
      sessionStorage.setItem("hasRefreshed", "true");
    }
  }, []);

  return (
    <Container id="toast" fluid className="toast-section my-5 text-center">
      <Row className="align-items-center g-5">

        {/* Image */}
        <Col xs={12}  md={6}>
          <motion.img
            src={toast}
            alt="Toast"
            className="toast-img"
            initial={shouldAnimate ? { opacity: 0, x: -70 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: false, margin: "-120px" }}
          />
        </Col>

        {/* Text */}
        <Col xs={12} md={6}>
          <motion.div
            className="our-toast"
            initial={shouldAnimate ? { opacity: 0, y: 60 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: false, margin: "-120px" }}
          >
            <h1>Our Toast</h1>
            <p>
              Here’s to love that grows deeper with time, to friendship that
              turns into partnership, and to a commitment built on trust,
              patience, and shared dreams. Today, we celebrate not just a
              wedding, but the beginning of a lifetime together.
            </p>
          </motion.div>
        </Col>

      </Row>
    </Container>
  );
};

export default Toast;
