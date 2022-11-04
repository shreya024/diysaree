import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Demo_Video from "./demo_video.mp4";
import ChooseCSS from "./ChooseUs.module.css";

const ChooseUs = () => {
  return (
    <div className={ChooseCSS.outer}>
      <Container>
        <Row>
          <Col>
            <video width={"100%"} controls className={ChooseCSS.rounded}>
              <source src={Demo_Video} type="video/mp4" />
            </video>
          </Col>
          <Col>
            <h2>Why Choose Us?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
              <li>od tempor incididunt ut lab</li>
              <li>od tempor incididunt ut lab</li>
            </ul>
            <Button variant="dark">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseUs;
