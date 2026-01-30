import { Container, Row, Col } from "react-bootstrap";


const bridesmaids = [
  { name: "Moyinoluwa Okeleye", role: "Maid of Honour" },
  { name: "Increase Akinyemi", role: "Bridesmaid" },
  { name: "Ebunoluwa Ogunyemi", role: "Bridesmaid" },
  { name: "Tanitojesu Abiola", role: "Bridesmaid" },
  { name: "Abisoye Aremu", role: "Bridesmaid" },
  { name: "Ibukunoluwa Akanni", role: "Bridesmaid" },
  { name: "Oreoluwa Aderinto", role: "Bridesmaid" },
  { name: "Mojoyinoluwa Agosu", role: "Bridesmaid" },
];

const groomsmen = [
  { name: "Iyanuoluwa Ajibike", role: "Best Man" },
  { name: "Oluwaseun Adegoke", role: "Groomsman" },
  { name: "Bukunmi Akinade", role: "Groomsman" },
  { name: "Temiloluwa Abiodun-Ojo", role: "Groomsman" },
  { name: "Boluwatife Akin-Otunla", role: "Groomsman" },
  { name: "Emmanuel Adebayo", role: "Groomsman" },
  { name: "Oluwatobi Osilaja", role: "Groomsman" },
  { name: "Ayooluwa Jesuniyi", role: "Groomsman" },
];

const WeddingParty = () => {
  return (
    <Container id="party" fluid className="wedding-party py-5">
      <h2 className="party-title text-center pt-2 mb-5">Wedding Party</h2>

      <Row className="gy-5">
        {/* Bridesmaids */}
        <Col xs={12}  md={6}>
          <h3 className="party-subtitle text-center mb-4">
            Meet the Bridesmaids
          </h3>
          {bridesmaids.map((person, index) => (
            <div key={index} className="party-card text-center">
              <p className="party-name">{person.name}</p>
              <span className="party-role">{person.role}</span>
            </div>
          ))}
        </Col>

        {/* Groomsmen */}
        <Col xs={12} md={6}>
          <h3 className="party-subtitle text-center mb-4">
            Meet the Groomsmen
          </h3>
          {groomsmen.map((person, index) => (
            <div key={index} className="party-card text-center">
              <p className="party-name">{person.name}</p>
              <span className="party-role">{person.role}</span>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default WeddingParty;
