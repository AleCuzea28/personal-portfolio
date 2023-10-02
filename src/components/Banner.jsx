import { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import girl from "../assets/img/programming-girl.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]; 
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{'Hello, I am Alexandra ... '}<span className="wrap">{text}</span></h1>
                            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nibh leo, sodales non aliquam a, sollicitudin non nulla. Suspendisse potenti. Duis fringilla eget nisl ac tincidunt. Fusce mauris neque, egestas a magna a, auctor venenatis est. Etiam at augue suscipit, viverra sem at, dictum ante. Curabitur imperdiet aliquam eros, et dapibus sem consectetur eget. Ut euismod velit sed laoreet mollis. Pellentesque in nibh a dui porttitor elementum ac non massa. Etiam vestibulum ipsum at molestie ultrices. Praesent viverra rhoncus elementum. Nullam a bibendum ligula.</p>
                            <button type="button" onClick={() => {console.log('connect')}}>Let's connect <ArrowRightCircle size={25} /></button>
                        </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={girl} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}