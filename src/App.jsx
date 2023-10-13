import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import  './nav.css';
import {AiFillHome} from "react-icons/ai";
import {BiSolidPhoneCall} from "react-icons/bi";
import {FaInfoCircle} from "react-icons/fa";
import travel from './images/travel1.jpg';
import contact from './images/contact-us.jpg';
import about from './images/aboutus.jpg';

const Home= ()=> <div> <img src={travel} alt="" width={"100%"} height={"530px"} />
</div>
const About= ()=> <div><img src={about} alt="" width={"100%"} height={"500px"}/></div>
const Contact= ()=> <div><img src={contact} alt="" width={"100%"} height={"530px"}/></div>

const Navigation =()=> (
    <nav>
        <ul>
            
            
            <li className="a"><Link to={'/about'} style={{textDecoration:'none'}}><FaInfoCircle/> ABOUT</Link></li>
            <li className="b"><Link to={'/contact'} style={{textDecoration:'none'}}><BiSolidPhoneCall/> CONTACT</Link></li>
            <li className="c"><Link to={'/home'}  style={{textDecoration:'none'}}><AiFillHome/> HOME</Link></li>
        </ul>
    </nav>
)

const App=()=> {
    return <BrowserRouter>
    <div className="header">
        <p>Welcome to Ooh la la...Plan your Perfect trip!!!</p>
        <Navigation/>
        <div className="box">
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
}

export default App;