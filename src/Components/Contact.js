import React from 'react'
//import RichText from './draft_component.js';
import {motion} from "framer-motion";
//import DownloadPage from "./downloadPage.js";
import { animeVar,transitions } from './animationVariants';

function Contact() {
    return (
        <motion.div
        exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions} 
        >
           {/* <RichText/> */}
           <div className="container">
           <p>You can contact us by writing an email to <a href="mailto:theCyberInformant@gmail.com">theCyberInformant@gmail.com</a>.</p>
           </div>
 
            
        </motion.div>
    )
}

export default Contact
