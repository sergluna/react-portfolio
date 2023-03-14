import React from 'react';


function Navbar({setCurrentPage}) {
    const onNavClickHandler = (page) => {
        setCurrentPage(page);
    }
    return ( <nav className="navbar navbar-expand lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="#about-me" className="nav-link" onClick={() => onNavClickHandler('About')}>About Me</a>
            </li>
            <li className="nav-item">
                <a href="#work" className="nav-link" onClick={() =>  onNavClickHandler('Portfolio')}>My Work</a>
            </li>
            <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={() => onNavClickHandler('Contact')}> Contact Me</a>
            </li>
        </ul>
        </div>
       
    </nav> );
}

export default Navbar;