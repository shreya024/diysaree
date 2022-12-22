import { useRef, useState, useEffect, React, Fragment } from "react";
import DIYCSS from "./DIYDesignEditor.module.css";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Stage, Image, Layer, Transformer, Circle, Rect } from "react-konva";
import useImage from "use-image";
import block1 from "./block1.png";
import block2 from "./block2.png";
import block3 from "./block3.png";
import block5 from "./design5.png";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import ExportAsImg from "./ExportAsImg";
import ReactImageZoom from "react-image-zoom";
import uniqid from "uniqid";

const URLImage = ({ image, shapeProps, onSelect, onChange }) => {
  const shapeRef = useRef();
  const [img] = useImage(image.src);

  return (
    <Fragment>
      <Image
        image={img}
        x={image.x}
        y={image.y}
        // I will use offset to set origin to the center of the image
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
        onClick={() => {
          console.log(onSelect(shapeRef));
        }}
        onTap={() => onSelect(shapeRef)}
        ref={shapeRef}
        {...shapeProps}
        name="rectangle"
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
    </Fragment>
  );
};

const DIYDesignEditor = () => {
  //const zoom = { width: 400, height: 250, zoomWidth: 500, img: { block3 } };
  const dragUrl = useRef();
  const stageRef = useRef();
  const exportRef = useRef();
  const trRef = useRef();
  const deleteButton = useRef();
  //list of images
  const [images, setImages] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [nodesArray, setNodes] = useState([]);
  const layerRef = useRef();
  const Konva = window.Konva;

  const selectionRef = useRef();
  const selection = useRef({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
      trRef.current.nodes([]);
      setNodes([]);
    }
  };

  const updateSelection = () => {
    const node = selectionRef.current;
    node.setAttrs({
      visible: selection.current.visible,
      x: Math.min(selection.current.x1, selection.current.x2),
      y: Math.min(selection.current.y1, selection.current.y2),
      width: Math.abs(selection.current.x1 - selection.current.x2),
      height: Math.abs(selection.current.y1 - selection.current.y2),
      fill: "rgba(0, 161, 255, 0.3)",
    });
    node.getLayer().batchDraw();
  };

  const oldPos = useRef(null);

  const onMouseDown = (e) => {
    const isElement = e.target.findAncestor(".elements-container");
    const isTransformer = e.target.findAncestor("Transformer");
    if (isElement || isTransformer) {
      return;
    }

    const pos = e.target.getStage().getPointerPosition();
    selection.current.visible = true;
    selection.current.x1 = pos.x;
    selection.current.y1 = pos.y;
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelection();
  };

  const onMouseMove = (e) => {
    if (!selection.current.visible) {
      return;
    }
    const pos = e.target.getStage().getPointerPosition();
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelection();
  };

  const onMouseUp = () => {
    oldPos.current = null;
    if (!selection.current.visible) {
      return;
    }
    const selBox = selectionRef.current.getClientRect();

    const elements = [];
    layerRef.current.find(".rectangle").forEach((elementNode) => {
      const elBox = elementNode.getClientRect();
      if (Konva.Util.haveIntersection(selBox, elBox)) {
        elements.push(elementNode);
      }
    });
    trRef.current.nodes(elements);
    selection.current.visible = false;
    // disable click event
    Konva.listenClickTap = false;
    updateSelection();
  };

  const onClickTap = (e) => {
    // if we are selecting with rect, do nothing
    if (selectionRef.current.visible()) {
      return;
    }
    let stage = e.target.getStage();
    let layer = layerRef.current;
    let tr = trRef.current;
    // if click on empty area - remove all selections
    if (e.target === stage) {
      selectShape(null);
      setNodes([]);
      tr.nodes([]);
      layer.draw();
      return;
    }

    // do nothing if clicked NOT on our rectangles
    if (!e.target.hasName(".rect")) {
      return;
    }

    // do we pressed shift or ctrl?
    const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
    const isSelected = tr.nodes().indexOf(e.target) >= 0;

    if (!metaPressed && !isSelected) {
      // if no key pressed and the node is not selected
      // select just one
      tr.nodes([e.target]);
    } else if (metaPressed && isSelected) {
      // if we pressed keys and node was selected
      // we need to remove it from selection:
      const nodes = tr.nodes().slice(); // use slice to have new copy of array
      // remove node from array
      nodes.splice(nodes.indexOf(e.target), 1);
      tr.nodes(nodes);
    } else if (metaPressed && !isSelected) {
      // add the node into selection
      const nodes = tr.nodes().concat([e.target]);
      tr.nodes(nodes);
    }
    layer.draw();
  };

  const unSelectShape = (prop) => {
    selectShape(prop);
  };

  const onDeleteImage = (index) => {
    const newImages = [...images];
    console.log(newImages);
    newImages.splice(index, 1);
    setImages(newImages);

    //const newList = images.filter((item) => item.id !== index);

    //setImages(newList);
  };

  const handleDelete = (e) => {
    unSelectShape(null);

    if (images.length !== 0) {
      onDeleteImage(images.length - 1);
    }
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

        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Select Paar/Aanchal Designs
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <img
                alt="block5"
                src={block5}
                draggable="true"
                onDragStart={(e) => {
                  dragUrl.current = e.target.src;
                }}
              />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Col>
          <Button variant="dark" ref={deleteButton} onClick={handleDelete}>
            Undo
          </Button>
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
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={checkDeselect}
          onClick={onClickTap}
          ref={stageRef}
        >
          <Layer ref={layerRef}>
            {images.map((image, index) => {
              return (
                <URLImage
                  image={image}
                  key={index}
                  shapeProps={image}
                  isSelected={false}
                  unSelectShape={unSelectShape}
                  getLength={images.length}
                  onClick={onClickTap}
                  onSelect={(e) => {
                    selectShape(image.id);
                  }}
                  onChange={(newAttrs) => {
                    const image = images.slice();
                    image[index] = newAttrs;
                    setImages(image);
                  }}
                  onDelete={onDeleteImage}
                />
              );
            })}
            <Transformer
              // ref={trRef.current[getKey]}
              ref={trRef}
              boundBoxFunc={(oldBox, newBox) => {
                // limit resize
                if (newBox.width < 5 || newBox.height < 5) {
                  return oldBox;
                }
                return newBox;
              }}
            ></Transformer>

            <Rect fill="rgba(0,0,255,0.5)" ref={selectionRef} />
          </Layer>
        </Stage>
      </Container>
    </div>
  );
};

export default DIYDesignEditor;
