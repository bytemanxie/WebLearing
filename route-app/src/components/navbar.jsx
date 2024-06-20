import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">讲义</a> */}
                    <Link to="/" className="navbar-brand">讲义</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/Linux">Linux</a>
                        <a className="nav-link" href="/Django">Django</a>
                        <a className="nav-link" href='/Web'>Web</a> */}
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        <Link to="/linux" className="nav-link">Linux</Link>
                        <Link to="/django" className="nav-link">Django</Link>
                        <Link to="/web" className="nav-link">Web</Link>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;
