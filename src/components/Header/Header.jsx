import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark dark-mode-nav">
        <a className="navbar-brand ml-2" href="index.html">Jonathan Canales</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ml-auto">
             <li className="nav-item">
                 <a className="nav-link" id="resume-html" href="https://docs.google.com/document/d/15_fhNYhoWhs-jhDepklAoRYUjy2g0Ne8xnrR0n6PQyg/edit?usp=sharing" target="_blank">Resume</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" id="contact-html" href="mailto: joncanales2@gmail.com">Contact</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" id="portfolio-html" href="portfolio.html">Portfolio</a>
             </li>
             <li className="nav-item active">
                 <a className="nav-link" id="index-html" href="index.html">About</a>
               </li>
               </ul>
         </div>
       </nav>
    );
};

export default Header;