import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCSS from "./Projects.module.css";
import demodesign from "./design3.png";
import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>Projects</Col>
          <Col>
            <Button>View All Projects</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={demodesign} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={demodesign} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={demodesign} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={demodesign} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={demodesign} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={demodesign} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
