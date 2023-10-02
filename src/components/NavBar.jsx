import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export function NavBar() {

    const [activeLink , setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    // const handleClick = () => {
    //     ref.current?.scrollIntoView({behavior: "smooth"});
    // }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                        href="#home" 
                        className={activeLink === "home" ? "active navbar-link" : "navbar-link"} 
                        onClick={() => onUpdateActiveLink('home') }>
                        Home
                        </Nav.Link>
                        <Nav.Link 
                        href="#skills" 
                        className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} 
                        onClick={() => onUpdateActiveLink('skills') }>
                        Skills
                        </Nav.Link>
                        <Nav.Link 
                        href="#projects" 
                        className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} 
                        onClick={() => onUpdateActiveLink('projects') }>
                        Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/gabriela-alexandra-cuzea-674a9b20a/"><img src={navIcon1} alt=""/></a>
                            <a href="https://www.facebook.com/alexandra.cuzea/?locale=ro_RO"><img src={navIcon2} alt=""/></a>
                            <a href="https://www.instagram.com/ale_cuzea/"><img src={navIcon3} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={()=>{console.log('connect')}}><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}