import React from "react";
import { DiGit } from 'react-icons/di';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { SiGoogleanalytics, SiWordpress, SiMoz } from 'react-icons/si';
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFacebook />
      </Col>
    </Row>
  );
}

export default Toolstack;
