import React from "react";
import Navbar from "../Navbar";

function Header({setCurrentPage}) {

    

    return (
        <header class="header">
            <h1>Sergio Luna's Portfolio</h1>
            <img src="../../moon.jpg"/>
            <Navbar setCurrentPage={setCurrentPage}/>
        </header>
    );
}

export default Header;