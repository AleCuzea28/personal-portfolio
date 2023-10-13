import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import star from "../assets/img/star.png";
import banner from "../assets/img/banner-bg.jpeg";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Explore my skills and experience below to discover how I can make a positive impact.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={star} alt="Skill star" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={star} alt="Skill star" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={star} alt="Skill star" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={star} alt="Skill star" />
                                    <h5>Linux</h5>
                                </div>
                                <div className="item">
                                    <img src={star} alt="Skill star" />
                                    <h5>C/C++</h5>
                                </div>
                                <div className="item">
                                    <img src={star} alt="Skill star" />
                                    <h5>SQL/MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={star} alt="Skill star" />
                                    <h5>Java</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={banner} />
        </section>
      )
}