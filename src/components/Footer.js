import  * as React from "react"
import { Link } from "gatsby"
import "./footer.scss"

const Footer = () => {
    return <div className="footer-container">
    <div className = "footer">
        <div classsName= "footer-content">
            <div>
                
            <h3 className = {"title"}> Wild Animals™</h3>
            </div> 
            <div>
                <small>© {new Date().getFullYear()} TeamGeek</small>
            </div>
        </div>
        <div>
            <h4 className= {"title"}>About Us</h4>
                <div className = {"column"}>
                    <a>Location</a>
                    <a>What we do</a>
                    <a>How we do it</a>
                    <a>Who we are</a>
                </div>
        </div>
        <div>
            <h4 class Name = {"title"}>Products</h4>
                <div className = {"column"}>
                <Link to = {"/Products"}></Link>
                <a>Prints</a>
                <a>Lorem ipsum</a>
                <a>This is a dummy text</a>
                <a>Hello</a>
                </div>
        </div>
        <div>
            <h4 className = {"title"}>Contact Us</h4>
                <div className = {"column"}>
                    <small>
                    <p><a href = "mailto:work@teamgeek.io">work@teamgeek.io</a></p>
                    <p><a href = "tel:+27648912008">+27 64 891 2008</a></p>
                    </small>
                </div>
        </div>
    </div>
    </div>
}

export default Footer 