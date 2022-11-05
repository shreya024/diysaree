import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavLink from "react-bootstrap/esm/NavLink";
const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>About Us</h3>
            <NavLink href="#">Aim</NavLink>
            <NavLink href="#">Vision</NavLink>
            <NavLink href="#">Testimonials</NavLink>
          </Col>
          <Col>
            <h3>Services</h3>
            <NavLink href="#">Writing</NavLink>
            <NavLink href="#">Internships</NavLink>
            <NavLink href="#">Coding</NavLink>
            <NavLink href="#">Teaching</NavLink>
          </Col>
          <Col>
            <h3>Contact Us</h3>
            <NavLink href="#">Uttar Pradesh</NavLink>
            <NavLink href="#">Ahemdabad</NavLink>
            <NavLink href="#">Indore</NavLink>
            <NavLink href="#">Mumbai</NavLink>
          </Col>
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
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
