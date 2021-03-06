//imports for React and React Router and components for use below
import React from 'react';
import { Link } from 'react-router-dom';
import SocialsBottom from '../components/SocialsBottom'

//this component holds the container for the footer, including links that render different components of the website and the social media buttons component
function Footer() {
    return (
        <div id="footer">
            <div id="footercontact">
                <p>Questions? <Link to="../pages/Contact">Contact Me!</Link></p>
            </div>
            
            <div id="footerlinks">
                <Link to="/">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact Me</Link>
                <Link to="/Hobbies">Hobbies</Link>
                <Link to="/Work">Work History</Link>
            </div>
            
            <SocialsBottom />

            <p id="copyright">Copyright Olivia Hartwig 2020</p>
        </div>
    )
}

export default Footer;