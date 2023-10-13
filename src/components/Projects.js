import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import legoSignUpImg from "../assets/img/lego_signup.png";
import smileLoginImg from "../assets/img/smile_login.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Interface for Lego EV3 Robot",
      description: "IN PROGRESS",
      imgUrl: legoSignUpImg,
    },
    {
      title: "Smile app for sad people",
      description: "IN PROGRESS",
      imgUrl: smileLoginImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    The projects section is a curated showcase of my
                    professional work and accomplishments. It provides a visual
                    and narrative overview of my key projects, highlighting my
                    skills, expertise, and creativity.{" "}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Python</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">NodeJS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
