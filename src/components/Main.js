import React from "react";
import logo from '../img/Asset1.svg';
// import { Link, Route, Routes } from "react-router-dom";
import Nav from './NavComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';

function Main() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" style={{height: "20vh"}} />
                <Nav />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
        
            </header>
        </div>
    )
}

export default Main;