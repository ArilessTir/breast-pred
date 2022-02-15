import React from "react";
import './navbar.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


const Navbar =()=>{
    return(
        <nav className="navbar">
            <h1>Ariless TIR</h1>
            <div>
                <a href="https://www.linkedin.com/in/ariless-tir-360b6a164/" target="_blank">
                    <AiFillLinkedin  size={30} className="logo"/>
                </a>
                <a href="https://github.com/ArilessTir/breast-pred" target="_blank">
                <AiFillGithub size={30} className="logo"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar