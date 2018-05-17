import './Navbar.css';
import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navbar extends Component {
    render() {
        return (
            <nav id="navbar" className="navbar">
                <div className="navbar-line">
                <AnchorLink offset='57'  href="#skills">skills</AnchorLink>
                <AnchorLink offset='57'  href="#portfolio">portfolio</AnchorLink>
                <AnchorLink offset='57'  href="#about">about</AnchorLink>
                </div>
            </nav>
        );
    }
}

export default Navbar;
