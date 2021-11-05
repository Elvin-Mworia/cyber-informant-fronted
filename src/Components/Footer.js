import React from 'react'
import './styles/footer.scss';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
              
        <ul>
        <Link to="/About"> <li>About</li></Link>
        <Link to="/Contacts"> <li>Contact</li></Link>
        <Link to="/Privacy-policy"> <li>Privacy Policy</li></Link>
        </ul>
       
    <div className="social-media">
    <h1>Follow Us</h1>
    </div>
    
</footer>
    )
}

export default Footer
