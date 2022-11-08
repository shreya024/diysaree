import { useRef, useState, React } from "react";
import DIYCSS from "./DIYDesignEditor.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Stage, Image, Layer } from "react-konva";
import useImage from "use-image";
import block1 from "./icon1.svg";
import block2 from "./block2.png";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { ReactComponent as Logo } from "./icon1.svg";

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

  const [colorPickerstate, setColorPickerState] = useState(false);
  const [color, setColor] = useState({ r: "241", g: "112", b: "19", a: "1" });

  const handleClick = () => {
    setColorPickerState(!colorPickerstate);
  };

  const handleClose = () => {
    setColorPickerState(false);
  };

  const handleChange = (e) => {
    setColor({
      r: e.rgb.r,
      g: e.rgb.g,
      b: e.rgb.b,
      a: e.rgb.a,
    });
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

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
          <Logo
            fill={`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}
            draggable="true"
            onDragStart={(e) => {
              console.log("Dragging");
              dragUrl.current = e.target.src;
            }}
          />
        </Col>
        <Col>
          <div>
            <div style={styles.swatch} onClick={handleClick}>
              <div style={styles.color} />
            </div>
            {colorPickerstate ? (
              <div style={styles.popover}>
                <div style={styles.cover} onClick={handleClose} />
                <SketchPicker color={color} onChange={handleChange} />
              </div>
            ) : null}
          </div>
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
