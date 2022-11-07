import { useRef, useState, React } from "react";
import DIYCSS from "./DIYDesignEditor.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Stage, Image, Layer } from "react-konva";
import useImage from "use-image";
import block1 from "./block1.png";
import block2 from "./block2.png";
import SketchExample from "./Sketch";

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const DIYDesignEditor = () => {
  const dragUrl = useRef();
  const stageRef = useRef();
  const [images, setImages] = useState([]);
  return (
    <Container className={DIYCSS.outer}>
      <Row>
        <Col>
          <img
            alt="block1"
            src={block1}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />{" "}
        </Col>
        <Col>
          <img
            alt="block2"
            src={block2}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />{" "}
        </Col>
        <Col>
          <SketchExample />
        </Col>
        <Col>
          <Button variant="dark">Save Design</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="dark">Add to Wishlist</Button>
        </Col>
        <Col>
          <Button variant="dark">Order Now</Button>
        </Col>
      </Row>

      <Container
        className={DIYCSS.inner}
        onDrop={(e) => {
          e.preventDefault();
          // register event position
          stageRef.current.setPointersPositions(e);
          // add image
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
              },
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          ref={stageRef}
        >
          <Layer>
            {images.map((image) => {
              return <URLImage image={image} />;
            })}
          </Layer>
        </Stage>
      </Container>
    </Container>
  );
};

export default DIYDesignEditor;
