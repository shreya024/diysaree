import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import design1 from "./design1.png";
import design2 from "./design2.png";
import GalleryCSS from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={GalleryCSS.outerbg}>
      <Container>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={design1} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img src={design2} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img src={design2} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
            <Row>
              <Card className="bg-dark text-white">
                <Card.Img src={design2} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
