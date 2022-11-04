import React from "react";
import DIYCSS from "./DIYDesignEditor.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const DIYDesignEditor = () => {
  return (
    <div className={DIYCSS.outer}>
      <Row>
        <Col>a</Col>
        <Col>b</Col>
        <Col>c</Col>
        <Col>d</Col>
        <Button variant="dark">Save Design</Button>
      </Row>

      <Row>
        <Button variant="dark">Add to Wishlist</Button>
        <Button variant="dark">Order Now</Button>
      </Row>

      <Container className={DIYCSS.inner}></Container>
    </div>
  );
};

export default DIYDesignEditor;
