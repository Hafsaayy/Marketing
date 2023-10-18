import React from "react";


import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import gads from 'C:/Portfolio-master/src/components/About/gads.jpg'; 
import ts from 'C:/Portfolio-master/src/components/About/ts.jpg';
import ganalytics from 'C:/Portfolio-master/src/components/About/googleanalytics.jpeg';
import seo from 'C:/Portfolio-master/src/components/About/Seo.png';
import socialMediaMarketingLogo from 'C:/Portfolio-master/src/components/About/social_media_marketing_logo.png.jpg';

import { AiFillGoogleCircle, AiFillFacebook } from "react-icons/ai";

import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
  <img
    src={socialMediaMarketingLogo}
    alt="Social Media Marketing"
    className="custom-icon"
    style={{ width: '100%', height: 'auto' }}
  />
</Col>

<Col xs={4} md={3} className="tech-icons">
  <img
    src={seo}
    alt="Seo  icon"
    className="custom-icon"
    style={{ width: '100%', height: 'auto' }}
  />
  
</Col>

      <Col xs={4} md={2} className="tech-icons">
          <AiFillFacebook /> {/* Facebook Ads icon */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
  <img
    src={gads}
    alt="gads"
    className="custom-icon"
    style={{ width: '100%', height: 'auto' }}
  />
  
</Col>  
        <Col xs={4} md={3} className="tech-icons">
  <img
    src={ts}
    alt="ts"
    className="custom-icon"
    style={{ width: '100%', height: 'auto' }}
  />
  
</Col>
    
   
    
      <Col xs={4} md={3} className="tech-icons">
  <img
    src={ganalytics}
    alt="ganalytics"
    className="custom-icon"
    style={{ width: '100%', height: 'auto' }}
  />
  
</Col>
    

      
    </Row>
  );
}

export default Techstack;


