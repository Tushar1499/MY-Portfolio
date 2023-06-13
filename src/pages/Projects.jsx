import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import tech from "../assets/projects/tech.png";
import ubl from "../assets/projects/ubl.png";
import todo from "../assets/projects/todo.png";
import ppt from "../assets/projects/ppt.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="Tech-Forest"
              description="Project Tech-Forest-Clone use in Html,Css,SCSS,Bootstrap,Js."
              ghLink="https://github.com/Tushar1499/Tech-forest-clone"
              demoLink="https://techforest-clone.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ubl}
              isBlog={false}
              title="UBL-GLOBAL"
              description="UBL-GLOBAL single page website useing HTML,CSS,Media Query"
              ghLink="https://github.com/Tushar1499/single-page-website"
              demoLink="https://single-page-website11.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO-LIST-APP"
              description="Project TODO-LIST-APP its use very easy to Add,Cut,Delete,Save with the help only JS and Bootstrap  ."
              ghLink="https://github.com/Tushar1499/todo-list"
              demoLink="https://todolistappjava.netlify.app/"
            />
          </Col>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={ppt}
              isBlog={false}
              title="MY Portfolio "
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects