import { useRef, useState, useEffect, React, Fragment } from "react";
import DIYCSS from "./DIYDesignEditor.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Stage, Image, Layer, Transformer, Circle } from "react-konva";
import useImage from "use-image";
import block1 from "./block1.png";
import block2 from "./block2.png";
import block3 from "./block3.png";
import block4 from "./design4.png";
import block5 from "./design5.png";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import ExportAsImg from "./ExportAsImg";
import ReactImageZoom from "react-image-zoom";
import uniqid from "uniqid";

const URLImage = ({
  image,
  shapeProps,
  unSelectShape,
  isSelected,
  onSelect,
  onChange,
  onDelete,
}) => {
  const shapeRef = useRef();
  const trRef = useRef();
  const deleteButton = useRef();
  const [img] = useImage(image.src);

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const onMouseEnter = (event) => {
    if (isSelected) {
      event.target.getStage().container().style.cursor = "move";
    }
    if (!isSelected) {
      event.target.getStage().container().style.cursor = "pointer";
    }
  };

  const onMouseLeave = (event) => {
    event.target.getStage().container().style.cursor = "default";
  };

  const handleDelete = () => {
    unSelectShape(null);
    onDelete(shapeRef.current);
  };

  return (
    <Fragment>
      <Image
        image={img}
        x={image.x}
        y={image.y}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        // I will use offset to set origin to the center of the image
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        >
          <Circle
            radius={8}
            fill="red"
            ref={deleteButton}
            onClick={handleDelete}
            x={shapeRef.current.width()}
          ></Circle>
        </Transformer>
      )}
    </Fragment>
  );
};

const DIYDesignEditor = () => {
  const zoom = { width: 400, height: 250, zoomWidth: 500, img: { block3 } };
  const dragUrl = useRef();
  const stageRef = useRef();
  const exportRef = useRef();
  //list of images
  const [images, setImages] = useState([]);
  const [selectedId, selectShape] = useState(null);

  const handleRemove = (index) => {
    const newList = images.filter((item) => item.index !== index);

    setImages(newList);
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const unSelectShape = (prop) => {
    selectShape(prop);
  };

  const onDeleteImage = (node) => {
    const newImages = [...images];
    newImages.splice(node.index, 1);
    setImages(newImages);
  };

  const [colorPickerstate, setColorPickerState] = useState(false);
  const [color, setColor] = useState({ r: "255", g: "255", b: "255", a: "1" });

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
    <div className={DIYCSS.outer}>
      <Row>
        <Col>
          <div style={styles.swatch} onClick={handleClick}>
            <div style={styles.color} />
          </div>
          {colorPickerstate ? (
            <div style={styles.popover}>
              <div style={styles.cover} onClick={handleClose} />
              <SketchPicker color={color} onChange={handleChange} />
            </div>
          ) : null}
        </Col>

        <Col>
          <img
            alt="block1"
            src={block2}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />{" "}
        </Col>
        <Col>
          <img
            alt="block2"
            src={block1}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />{" "}
        </Col>
        <Col>
          <img
            alt="block3"
            src={block3}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />{" "}
        </Col>
        <Col>
          <img
            alt="block5"
            src={block5}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />
        </Col>
        <Col>
          <Button
            variant="dark"
            onClick={() => ExportAsImg(exportRef.current, "design")}
          >
            Save Design
          </Button>
        </Col>

        <Col>
          <Button variant="dark">Wishlist</Button>
        </Col>
        <Col>
          <Button variant="dark">Order Now</Button>
        </Col>
      </Row>
      <br></br>

      <Row>
        <Col>
          <img
            alt="block4"
            src={block4}
            draggable="true"
            onDragStart={(e) => {
              dragUrl.current = e.target.src;
            }}
          />
        </Col>
        <Col>
          <Container
            className={DIYCSS.design}
            ref={exportRef}
            style={{
              backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
            }}
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
              onMouseDown={checkDeselect}
              onTouchStart={checkDeselect}
              ref={stageRef}
            >
              <Layer>
                {images.map((image, index) => {
                  return (
                    <URLImage
                      image={image}
                      key={index}
                      shapeProps={image}
                      isSelected={image === selectedId}
                      unSelectShape={unSelectShape}
                      onClick={handleRemove}
                      onSelect={() => {
                        selectShape(image);
                      }}
                      onChange={(newAttrs) => {
                        const rects = images.slice();
                        rects[index] = newAttrs;
                        setImages(rects);
                      }}
                      onDelete={onDeleteImage}
                    />
                  );
                })}
              </Layer>
            </Stage>
          </Container>
        </Col>
        {/*<Col>
          <ReactImageZoom {...zoom} />
        </Col>*/}
      </Row>
    </div>
  );
};

export default DIYDesignEditor;
