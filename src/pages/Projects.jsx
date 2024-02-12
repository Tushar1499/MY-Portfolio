import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import tech from "../assets/projects/tech.png";
import ubl from "../assets/projects/ubl.png";
import todo from "../assets/projects/todo.png";
import ppt from "../assets/projects/ppt.png";
import about from "../assets/projects/about.png";
import cipti from "../assets/projects/cipti.png";
import it from "../assets/projects/it.png";
import mtt from "../assets/projects/mtt.png";
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
              imgPath={ppt}
              isBlog={false}
              title="MY Portfolio "
              description="
In my portfolio, I showcase my achievements, skills, and experiences. It highlights my expertise, projects, and qualifications, providing a comprehensive overview of my capabilities and contributions."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={about}
              isBlog={false}
              title="Admin"
              description="In the administrative domain, we handle tasks efficiently, ensuring smooth operations. From managing schedules to organizing data, our administrative services streamline processes, allowing you to focus on core business objectives."
              demoLink="https://admin-weld-zeta.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cipti}
              isBlog={false}
              title="Crypto"
              description="In the realm of cryptocurrency, we offer insights, analysis, and solutions to navigate this rapidly evolving landscape. From investment strategies to blockchain technology, our expertise empowers you to thrive in the crypto market."
              demoLink="https://crypto-sable-one.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={it}
              isBlog={false}
              title="Consulting"
              description="
In the consulting realm, we provide expert guidance tailored to your needs. From strategic planning to problem-solving, our team offers solutions to drive your business forward effectively and efficiently."
              demoLink="https://consulting-react.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mtt}
              isBlog={false}
              title="Multipurpose"
              description="Our Multipurpose React Website offers flexibility, responsiveness, and customization for businesses. With sleek design, seamless navigation, and scalable performance, it's perfect for establishing a dynamic online presence across industries."
              demoLink="https://multipurpose-tawny.vercel.app/home-restaurant"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
