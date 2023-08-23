import { useState, useEffect } from "react";

export default function Header(props) {

    const navStyles = {
        height: props.showMenu ? "200px" : "0",
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
            <h2 className="site-title">M&G Clean Pros</h2>
            
            <button className="booknow-btn-header">Book now</button>
            {!props.showMenu ? <i className="fa-solid fa-bars" onClick={props.toggleMenu}></i> :
            <i className="fa-solid fa-xmark" onClick={props.toggleMenu}></i>
            }
            <nav style={navStyles}>
                <a className="nav-item" style={navItemStyles}>home</a>
                <a className="nav-item" style={navItemStyles}>about</a>
                <a className="nav-item" style={navItemStyles}>services</a>
                <a className="nav-item" style={navItemStyles}>contact</a>
            </nav>
        </header>
    )
}