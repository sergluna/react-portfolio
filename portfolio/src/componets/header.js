import React from "react";
import "../style.css";

function Header() {
    return (
        <header class="header">
            <h1>Sergio Luna's Portfolio</h1>
            <img src="../moon.jpg"/>
                <nav>
                    <ul>
                        <li>
                            <a href="#about-me">About Me</a>
                        </li>
                        <li>
                            <a href="#work">My Work</a>
                        </li>
                        <li>
                            <a href="#contact"> Contact Me</a>
                        </li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;