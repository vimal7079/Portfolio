import React from "react";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about"
import Project from "./components/project";
import Contact from "./components/contact";
//import { Routes } from "react-router-dom";
//import { Routes , Route,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    /*<BrowserRouter>
    <Nav />
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>*/
   <>
    <Nav/>
    <Home/>
    <About/>
    <Project/>
    <Contact/></>
    
  
  );
}

export default App;
