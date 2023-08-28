import { useState, useEffect } from "react";

export default function Header(props) {

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
            
            <button className="booknow-btn-header">Book now</button>
            {!props.showMenu ? <i className="fa-solid fa-bars" onClick={props.toggleMenu}></i> :
            <i className="fa-solid fa-xmark" onClick={props.toggleMenu}></i>
            }
            <nav style={navStyles}>
                <a href="/" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>home</a>
                <a href="#services" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>services</a>
                <a href="#about" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>about</a>
                <a href="#reviews" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>reviews</a>
                <a href="#areas" className="nav-item" style={navItemStyles} onClick={props.toggleMenu}>service areas</a>
            </nav>
        </header>
    )
}