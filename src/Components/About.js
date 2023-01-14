import React from 'react'
//import RichText from './draft_component.js';
import {motion} from "framer-motion";
//import DownloadPage from "./downloadPage.js";
import { animeVar,transitions } from './animationVariants';
import "./styles/privacy.scss";
function About() {
    return (
        <motion.div
        exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions} 
        >
          <div className="container">  <p>We are focused on creating awareness of the threats that exist in cyber-security and how individuals,businesses and organizations can tackle them.</p></div>
   
            
        </motion.div>
    )
}

export default About