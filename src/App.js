import './App.css';
import Header from "./Components/Pages/Header/Header";
import Footer from "./Components/Pages/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Gallery from "./Components/Pages/Gallary/Gallery";
import Contact from "./Components/Pages/Contact/Contact";
import React from "react";
import Navbar from "./Components/Pages/Navbar/Navbar";
import Countries from "./Components/Countries/Countries";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
                <Navbar/>
            </div>
            <Routes>
                <Route path="/countries"
                element={<Countries/>}
                />
                <Route path="/home"
                       element={<Home />}/>
                <Route exact path="/about"
                       element={<About />}/>
                <Route path="/gallery" element={<Gallery />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
