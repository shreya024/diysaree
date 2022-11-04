import React from "react";
import HomeCSS from "./Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Demo_Video from "./demo_video.mp4";

const Home = () => {
  return (
    <div className={HomeCSS.homebg}>
      <Carousel fade>
        <Carousel.Item>
          <Container className={HomeCSS.cardtext}>
            <Row>
              <Col>
                <h1>How Our Sarees are Made...</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <Button variant="outline-light">Learn More</Button>
              </Col>
              <Col>
                <video
                  width={"100%"}
                  controls
                  className={HomeCSS.rounded_border}
                >
                  <source src={Demo_Video} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className={HomeCSS.cardtext}>
            <Row>
              <Col>
                <h1>How to Use the DIY Design Editor...</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <Button variant="outline-light">Learn More</Button>
              </Col>
              <Col>
                <video
                  width={"100%"}
                  controls
                  className={HomeCSS.rounded_border}
                >
                  <source src={Demo_Video} type="video/mp4" />
                </video>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
