import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
   } from "react-router-dom";
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import Portfolio from './components/PortfolioComponent';



const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} >
            
          </Route>
          <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>,
    rootElement
      
      );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
