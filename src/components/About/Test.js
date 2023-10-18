import { AiFillGoogleCircle, AiFillFacebook } from "react-icons/ai";
function Techstack() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <AiFillGoogleCircle /> {/* Google Ads icon */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <AiFillFacebook /> {/* Facebook Ads icon */}
        </Col>
        {/* ... (other icons can remain as they are) */}
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        {/* ... (other icons can remain as they are) */}
      </Row>
    );
  }
  