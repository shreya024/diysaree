import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/esm/Container";
import demoImage from "./demo_image.png";
import Button from "react-bootstrap/Button";
import CollectionCSS from "./Collection.module.css";
import Carousel from "react-bootstrap/Carousel";

const Collection = () => {
  return (
    <div className={CollectionCSS.outer}>
      <h1>Featured Collection </h1>
      <Carousel>
        <Carousel.Item>
          <Container className={CollectionCSS.outer}>
            <CardGroup>
              <Card className={CollectionCSS.card_bg}>
                <Card.Img
                  variant="top"
                  src={demoImage}
                  className={CollectionCSS.image_css}
                />
                <Card.Body>
                  <Card.Title>Collection 1</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-dark">View Collection</Button>
                </Card.Footer>
              </Card>
              <Card className={CollectionCSS.card_bg}>
                <Card.Img
                  variant="top"
                  src={demoImage}
                  className={CollectionCSS.image_css}
                />
                <Card.Body>
                  <Card.Title>Collection 2</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-dark">View Collection</Button>
                </Card.Footer>
              </Card>
              <Card className={CollectionCSS.card_bg}>
                <Card.Img
                  variant="top"
                  src={demoImage}
                  className={CollectionCSS.image_css}
                />
                <Card.Body>
                  <Card.Title>Collection 3</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-dark">View Collection</Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className={CollectionCSS.outer}>
            <CardGroup>
              <Card className={CollectionCSS.card_bg}>
                <Card.Img
                  variant="top"
                  src={demoImage}
                  className={CollectionCSS.image_css}
                />
                <Card.Body>
                  <Card.Title>Collection 1</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-dark">View Collection</Button>
                </Card.Footer>
              </Card>
              <Card className={CollectionCSS.card_bg}>
                <Card.Img
                  variant="top"
                  src={demoImage}
                  className={CollectionCSS.image_css}
                />
                <Card.Body>
                  <Card.Title>Collection 2</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-dark">View Collection</Button>
                </Card.Footer>
              </Card>
              <Card className={CollectionCSS.card_bg}>
                <Card.Img
                  variant="top"
                  src={demoImage}
                  className={CollectionCSS.image_css}
                />
                <Card.Body>
                  <Card.Title>Collection 3</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-dark">View Collection</Button>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Collection;
