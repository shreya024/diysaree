import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import design2 from "./design2.png";
import design3 from "./design3.png";
import GalleryCSS from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={GalleryCSS.outerbg}>
      <Container>
        <h1>Gallery</h1>
        <Row>
          <Col sm>
            <Card className={GalleryCSS.card_css}>
              <Card.Img src={design2} alt="Card image" />
              <Card.ImgOverlay className={GalleryCSS.overlay_padding}>
                <Card.Title>Design1</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card className={GalleryCSS.card_css}>
                  <Card.Img src={design2} alt="Card image" />
                  <Card.ImgOverlay className={GalleryCSS.overlay_padding}>
                    <Card.Title>Design 2</Card.Title>
                    <Card.Text>This is a wider card</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card className={GalleryCSS.card_css}>
                  <Card.Img src={design2} alt="Card image" />
                  <Card.ImgOverlay className={GalleryCSS.overlay_padding}>
                    <Card.Title>Design 3</Card.Title>
                    <Card.Text>This is a wider card</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
            <Row>
              <Card className={GalleryCSS.card_css}>
                <Card.Img src={design3} alt="Card image" />
                <Card.ImgOverlay className={GalleryCSS.overlay_padding}>
                  <Card.Title>Design 4</Card.Title>
                  <Card.Text>This is a wider card with s</Card.Text>
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
