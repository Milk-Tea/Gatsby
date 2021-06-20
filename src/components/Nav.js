import * as React from "react"
import { Link } from "gatsby"

import "./Nav.scss"
import hamburger from './../assets/hamburger.svg'


const Nav = () => {

    const [show, setShow] = React.useState(false)

    return ( 
        <div>
        <div className="nav-container">
        <div className = "nav">
            <Link to="/" className="title" >
                Wild Animals™
            </Link>
            <div className="controls">
                <div className = {"nav-item"}>
                    <Link to = {"/"}>Home</Link>
                </div>
                <div className = {"nav-item"}>
                    <Link to = {"/shop"}>Shop</Link>
                </div>
                <div className = {"nav-item"}>    
                    <Link to = {"/blog"}>Blog</Link>
                </div>
            </div>
            <div role = "button" className="hamburger" onClick={() => setShow(show => !show)}>
                <img src={hamburger} alt = "not found"></img>
                
            </div>
        </div>
        </div>

        {show && <div className="menu">
        <div className = {"nav-item"}>
                <Link to = {"/"}>Home</Link>
            </div>
            <div className = {"nav-item"}>
                <Link to = {"/shop"}>Shop</Link>
            </div>
            <div className = {"nav-item"}>    
                <Link to = {"/blog"}>Blog</Link>
            </div>
        </div>}
        </div>
    )
}

export default Nav