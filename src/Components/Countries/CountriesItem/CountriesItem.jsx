import React from "react";
import classes from "./CountriesItem.module.css";

function CountriesItem(props) {

    return (
        <div className={classes.countryCard}>
            <div >
                <img className={classes.flag} src={props.country.flag} alt="Alt"/>
                <h2 className=""> {props.country.name}</h2>
                <p className={classes.info}>
                    <span className={classes.span}> Capital: </span>
                    {props.country.capital}</p>
                <p className={classes.info}>
                    <span className={classes.span}> Region: </span>
                    {props.country.region}</p>
            </div>

        </div>
    );
}

export default CountriesItem;