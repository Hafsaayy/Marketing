import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hammad Naeem </span>
            from <span className="purple"> We are a .</span>
            <br /> Marketing Agency
            <br />
                      Co Founder at VolcAds® | Full-Stack Media Buyer 📊 | Managed 💲7M + in Paid Ads | Google Ads Certified | 📈 Empowering businesses to boost ROI through precisely tailored ad campaigns, driving unstoppable growth 🚀
            <br />
            <br />
            WHAT WE OFFER
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> GOOGLE ADS
            </li>
            <li className="about-activity">
              <ImPointRight /> INCREASING SALES
            </li>
            <li className="about-activity">
              <ImPointRight /> FACEBOOK ADS
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">HAMMAD</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
