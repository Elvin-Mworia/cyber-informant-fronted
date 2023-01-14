import { useEffect ,useContext} from 'react';
import './App.scss';
import Home  from "./Components/Home.js";
import Navbar from "./Components/Navbar.js";
import Vulnerability  from "./Components/Vulnerability.js";
import Malware from "./Components/Malware.js";
import Login from "./Components/Login.js";
import Resources from "./Components/Resources.js";
import Registerpage from "./Components/Registerpage.js"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import About from "./Components/about.js";
import Checkout from "./Components/checkout.js";
import Contact from "./Components/Contact.js";
import Privacypolicy from "./Components/Privacypolicy.js";
import Createpost from "./Components/Createpost.js";
import Post from "./Components/Post.js";
import {AnimatePresence} from "framer-motion";
import Comments from "./Components/Comments.js";
import {Cart} from "./Components/Context/CartContext.js";
import Paypal from "./Components/paypal.js";
import Download from "./Components/download.js";
import DownloadPage from "./Components/downloadPage.js";
import {Logincontext} from './Components/Context/AppContext.js';
import {usercontext} from './Components/Context/UserContext.js';


function App() {
  //var location=useLocation();
  const{state,dispatch}=useContext(Logincontext);
  const{user,Dispatch}=useContext(usercontext);
  useEffect(()=>{
  if( localStorage.getItem("user")) { dispatch({type:"LOGIN"})
  Dispatch({type:"LOGGED-IN",payload:localStorage.getItem("username")});

  }},[])

  return (
    <AnimatePresence style={{overFlowY:"hidden"}} exitBeforeEnter>
    <Router >
    <div className="app">
      <Cart>
      <Navbar/>
      < Switch  >
      <Route path="/" exact component={Home}/>
      <Route path="/Vulns" exact component={Vulnerability}/> 
      <Route path="/Malware" exact component={Malware}/>
      <Route path="/Resources" exact component={Resources}/>
      <Route path="/checkout" exact component={Checkout}/>
      <Route path="/Login" exact component={Login}/>
      <Route path="/Register" exact component={Registerpage}/>
      <Route path="/About" exact component={About}/>
      <Route path="/Contact" exact component={Contact}/>
      <Route path="/Privacy-policy" exact component={Privacypolicy}/>
      <Route path="/payment" exact component={Paypal}/>
      {/* <Route path="/Create" exact component={Createpost}/> */}
      <Route path="/Create" exact component={Createpost}/>
      <Route path="/post/:id" exact component={Post}/>
      <Route path="/vulns/:id" exact component={Post}/>
      <Route path="/malware/:id" exact component={Post}/>
      <Route path="/post/:postid/comments" exact component={Comments}/>
      <Route path="/download" exact component={Download}/>
      <Route path="/My-resources" exact component={DownloadPage}/>

      </Switch>
      </Cart>
    </div>
    </Router>
    </AnimatePresence>
  );
}

export default App;
