import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiC,
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>

      {/* Front-end Web Development */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap title="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>

      {/* Back-end Web Development */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress title="Express.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
    </Row>
  );
}

export default Techstack;
