import Container from "react-bootstrap/Container";

const GiftRegistry = () => {
  return (
    <Container id="gift" fluid className="gift-section my-2 text-center ">
      <h2 className="gift-title  pb-3">Gift Registry</h2>

      <div className="gift-divider"></div>

      <p className="gift-message">
        Your presence is the greatest gift of all.
      </p>

      <p className="gift-subtext">
        If you would like to support our journey ahead, your generosity is
        sincerely appreciated.
      </p>

      {/* Bank Details */}
      <div className="gift-bank-card mx-auto mt-5 mb-3 p-4">
        <p><span>Bank Name</span> Access Bank</p>
        <p><span>Account Name</span> Ayodele Abigael Feranmi</p>
        <p><span>Account Number</span> 1234567890</p>
      </div>
    </Container>
  );
};

export default GiftRegistry;
