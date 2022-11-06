import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavLink from "react-bootstrap/esm/NavLink";
import FooterCSS from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={FooterCSS.outer}>
      <Container>
        <Row>
          <Col>
            <h3>Social Media</h3>
            <NavLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </NavLink>
            <NavLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </NavLink>
            <NavLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </NavLink>
            <NavLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </NavLink>
          </Col>

          <Col>
            <h3>Products</h3>
            <NavLink href="#">Saree</NavLink>
            <NavLink href="#">Design</NavLink>
            <NavLink href="#">DIY</NavLink>
            <NavLink href="#">Pure Silk</NavLink>
          </Col>
          <Col>
            <h3>Services</h3>
            <NavLink href="#">Genuine Product</NavLink>
            <NavLink href="#">Product Advice</NavLink>
            <NavLink href="#">DIY Design</NavLink>
          </Col>
          <Col>
            <h3>Contact Us</h3>
            <p>lorem ipsum</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
