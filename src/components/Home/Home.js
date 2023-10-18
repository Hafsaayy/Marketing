import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import './script1'

function Home() {
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  const animateBannerOnScroll = () => {
    const banners = document.querySelectorAll('[id="banner"]');

    banners.forEach(banner => {
        if (isElementInViewport(banner)) {
            const bannerText = banner.querySelector('[id="banner-text"]');
            const h1 = bannerText.querySelector('h1');
            const p = bannerText.querySelector('p');
            const btn1 = bannerText.querySelector('[id="banner-btn-1"]');
            const btn2 = bannerText.querySelector('[id="banner-btn-2"]');
            const video = banner.querySelector('[id="banner-image"]').querySelector('video');

            h1.classList.remove('scroll-hidden');
            p.classList.remove('scroll-hidden');
            btn1.classList.remove('scroll-hidden');
            btn2.classList.remove('scroll-hidden');
            video.classList.remove('scroll-hidden');

            h1.style.animation = 'zoomFadeRotate 1.2s forwards 0.3s';
            p.style.animation = 'zoomFadeRotate 1.2s forwards 0.6s';
            btn1.style.animation = 'zoomFadeRotate 1.2s forwards 0.9s';
            btn2.style.animation = 'zoomFadeRotate 1.2s forwards 1.2s';
            video.style.animation = 'zoomFadeRotate 1.2s forwards 1.5s';
        }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', animateBannerOnScroll);
    animateBannerOnScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', animateBannerOnScroll);
    }
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hammad Naeem Marketing!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                WE
                <strong className="main-name"> Welcome you to HN Marketing</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
