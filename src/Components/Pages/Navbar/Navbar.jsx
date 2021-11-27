import React from "react";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import LanguageHandler from "../../LanguageHandler";




function Navbar(props) {
    const setActive = ({isActive}) => (isActive ? classes.active : classes.inActive);
    return (
        <div className={classes.Navbar}>
            <nav className={classes.Navbar}>
                <div className={classes.navItem}>
                    <NavLink to="/countries" className={setActive}> COUNTRIES</NavLink>
                </div>
                <div className={classes.navItem}>
                    <NavLink to="/home" className={setActive}> HOME</NavLink>
                </div>
                <div className={`${classes.navItem} ${classes.active}`}>
                    <NavLink to="/about" className={setActive}> ABOUT</NavLink>
                </div>
                <div className={classes.navItem}>
                    <NavLink to="/gallery" className={setActive}> GALLERY</NavLink>
                </div>
                <div className={classes.navItem}>
                    <NavLink to="/contact" className={setActive}> CONTACT</NavLink>
                </div>
            </nav>
            <div>
                <LanguageHandler />
            </div>
        </div>


    );
}

export default Navbar;
