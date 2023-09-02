import { useState, useEffect } from "react";

export default function Header(props) {
    // const [windowWidth, setWindowWidth] = useState({width: window.innerWidth})
    // console.log(windowWidth)
    // // useEffect(() => {

    // //     function handleResize() {
    // //         setWindowWidth({width: window.innerWidth})
    // //     }

    // //     window.addEventListener("resize", handleResize)

    // // }, [windowWidth])

    const navStyles = {
        height: props.showMenu ? "300px" : "0",
        overflowX: props.showMenu ? "" : "hidden",
        padding: props.showMenu ? ".5rem .5rem" : "0"
    }

    const navItemStyles = {
        margin: props.showMenu ? ".5rem 0" : "0",
        padding: props.showMenu ? ".25rem" : "0"
    }

    const position = {
        display: !props.showMenu && "none",
    }

    return (
        <header className="site-header">
            <img src="./mgcleanlogo.jpg" className="site-title"/>
            <nav className="desktop-nav">
                <a href="/" className="nav-item" style={navItemStyles}>home</a>
                <a href="#services" className="nav-item" style={navItemStyles}>services</a>
                <a href="#about" className="nav-item" style={navItemStyles}>about</a>
                <a href="#reviews" className="nav-item" style={navItemStyles}>reviews</a>
                <a href="#areas" className="nav-item" style={navItemStyles}>service areas</a>
            </nav>
            <p className="header-text">Call us today!</p>
            <a className="booknow-btn-header" href="tel:+6306423773">Book now</a>
            {!props.showMenu ? <i className="fa-solid fa-bars" onClick={props.toggleMenu}></i> :
            <i className="fa-solid fa-xmark" onClick={props.toggleMenu}></i>
            }
            <nav className="mobile-nav" style={navStyles}>
                <a href="/" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>home</a>
                <a href="#services" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>services</a>
                <a href="#about" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>about</a>
                <a href="#reviews" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>reviews</a>
                <a href="#areas" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>service areas</a>
            </nav>
        </header>
    )
}