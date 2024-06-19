import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar
                    <span>Box Count: {props.boxescount}</span>
                </a>
            </div>
        </nav>
    );
}
 
export default NavBar;
