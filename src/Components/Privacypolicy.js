import React from 'react'
import {motion} from "framer-motion";
import { animeVar,transitions } from './animationVariants';
import "./styles/privacy.scss";
//import RichText from './draft_component.js';
//import DownloadPage from "./downloadPage.js";
//G1bET4Bk
function npm () {
    return (
        <motion.div
        exit="out"
        initial="initial"
        animate="in"
        variants={animeVar}
        transition={transitions} >
             {/* <RichText/> */}
             <div className="container">
         <p>Tempor mollit reprehenderit dolor magna. Ad ipsum aute sint duis irure deserunt anim mollit eu. Ullamco excepteur deserunt qui incididunt. Qui sunt amet tempor cillum eiusmod adipisicing laborum magna labore cillum dolor.
         Tempor mollit reprehenderit dolor magna. Ad ipsum aute sint duis irure deserunt anim mollit eu. Ullamco excepteur deserunt qui incididunt. Qui sunt amet tempor cillum eiusmod adipisicing laborum magna labore cillum dolor.
         Tempor mollit reprehenderit dolor magna. Ad ipsum aute sint duis irure deserunt anim mollit eu. Ullamco excepteur deserunt qui incididunt. Qui sunt amet tempor cillum eiusmod adipisicing laborum magna labore cillum dolor.
         Tempor mollit reprehenderit dolor magna. Ad ipsum aute sint duis irure deserunt anim mollit eu. Ullamco excepteur deserunt qui incididunt. Qui sunt amet tempor cillum eiusmod adipisicing laborum magna labore cillum dolor.
         Tempor mollit reprehenderit dolor magna. Ad ipsum aute sint duis irure deserunt anim mollit eu. Ullamco excepteur deserunt qui incididunt. Qui sunt amet tempor cillum eiusmod adipisicing laborum magna labore cillum dolor.
         Tempor mollit reprehenderit dolor magna. Ad ipsum aute sint duis irure deserunt anim mollit eu. Ullamco excepteur deserunt qui incididunt. Qui sunt amet tempor cillum eiusmod adipisicing laborum magna labore cillum dolor.
         
         
         
         </p>
         </div>
        
         
        </motion.div>
    )
}

export default npm 
