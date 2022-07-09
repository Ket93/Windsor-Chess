import Image from 'next/image'
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import temp from "/images/temp.png";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import styles from "./navbar.module.css";

const MyNavbar = () => {

    return (

        <>
            <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>


            <Navbar className={styles.mainNav} sticky="top" collapseOnSelect expand="lg">
                <Container className={styles.navContainer}>
                    <Navbar.Brand href="#home" className={styles.navLogo}>
                        <img
                            src={temp}
                            width="45"
                            height="45"
                            className={styles.navLogo}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className={styles.navLinkContainer} id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className={styles.navLink} href="/">Home</Nav.Link>
                            <Nav.Link className={styles.navDivider} >|</Nav.Link>
                            <Nav.Link className={styles.navLink} href="about">About</Nav.Link>
                            <Nav.Link className={styles.navDivider} >|</Nav.Link>
                            <NavDropdown className={styles.navDrop} title="Private Lessons">
                                <NavDropdown.Item className={styles.navDropLinkTop} href="chess_lessons">Chess</NavDropdown.Item>
                                <NavDropdown.Item className={styles.navDropLink} href="piano_lessons">Piano</NavDropdown.Item>
                                <NavDropdown.Item className={styles.navDropLink} href="tutoring">Tutoring</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className={styles.navDivider} >|</Nav.Link>
                            <Nav.Link className={styles.navLink} href="program">Our Program</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavbar;