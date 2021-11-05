
import './App.scss';
import Home  from "./Components/Home.js";
import Navbar from "./Components/Navbar.js";
import Vulnerability  from "./Components/Vulnerability.js";
import Malware from "./Components/Malware.js";
import Login from "./Components/Login.js";
import Resources from "./Components/Resources.js";
import Registerpage from "./Components/Registerpage.js"
import {BrowserRouter as Router,Route,Switch,useLocation} from "react-router-dom";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Privacypolicy from "./Components/Privacypolicy.js";
import Createpost from "./Components/Createpost.js";
import Post from "./Components/Post.js";
import {AnimatePresence} from "framer-motion";


function App() {
  //const location=useLocation();
  return (
    <AnimatePresence exit={{opacity:0}}>
    <Router>
    <div className="app">
      <Navbar/>
      <Switch >  
      <Route path="/" exact component={Home}/>

      <Route path="/Vulns" exact component={Vulnerability}/> 
      <Route path="/Malware" exact component={Malware}/>
      <Route path="/Resources" exact component={Resources}/>
      <Route path="/Login" exact component={Login}/>
      <Route path="/Register" exact component={Registerpage}/>
      <Route path="/About" exact component={About}/>
      <Route path="/Contact" exact component={Contact}/>
      <Route path="/Privacy-policy" exact component={Privacypolicy}/>
      <Route path="/Create Post" exact component={Createpost}/>
      <Route path="/post/:id" exact component={Post}/>

      </Switch>
      
    </div>
    </Router>
    </AnimatePresence>
  );
}

export default App;
