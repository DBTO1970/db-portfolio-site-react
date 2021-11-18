import React from "react";
import logo from '../img/Asset1.svg';
import '../App.css';
// import { Link, Route, Routes } from "react-router-dom";
import Nav from './NavComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';

function Main() {
    return (
        <div style={{width: '100vw'}}>
            <div className="App-header" >
                <img src={logo} className="App-logo" alt="logo" style={{height: "20vh"}} />
            </div>
            <Nav />
            <About />
            <Portfolio />
            <Contact />
            <Footer/>
        </div>
    )
}

export default Main;