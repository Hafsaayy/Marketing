import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                          Passionate about digital marketing, I've honed my skills in various domains, always eager to learn and implement the latest strategies. 💡
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> GOOGLE ADS - FACEBOOKS ADS  </b>
              </i>
              <br />
              <br />
              My field of Interest's are running &nbsp;
              <i>
                <b className="purple">successful ad compaigns  </b> and
                and {" "}
                <b className="purple">
                 generating traffic
                </b>
              </i>
              <br />
              <br />
                     We're driven by innovation, focusing on pioneering ADS while also delving into the transformative potential of marketing.
              with <b className="purple">Googole ads</b> and
              <i>
                <b className="purple">
                  {" "}
                  and Facebook ADS
                </b>
              </i>
              &nbsp; and
              <i>
                              <b className="purple"> specialize in driving growth through strategic Google Ads campaigns, effective social media management, and targeted Facebook Ads</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                                  href="https://github.com/Hafsaayy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                 href="https://www.linkedin.com/in/digitalmarketingexpert9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com
"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
