import React, {useEffect, useState} from "react";
import axios from "axios";
import CountriesItem from "./CountriesItem/CountriesItem";
import classes from "./Countries.module.css"

function Countries(props) {

    const [countries, setCountries] = useState([]);
    const getCountries = () => {
        axios.get("https://restcountries.com/v2/all").then((response) => {
            setCountries(response.data)
        })
    }
    useEffect(()=> {
        getCountries();
    },[]);
    const [value, setValue] = useState("");

    const filterCountry = countries.filter(country => {
        return country.name.toLowerCase().includes(value.toLowerCase());
    } )


    return (
        <div className="">
            <div>
                <form action="">
                    <input type="text" placeholder="Search.." className={classes.search}
                    onChange={(event) => setValue(event.target.value)}
                    />
                </form>
            </div>
            <div className={classes.countriesWrapper}>
                {
                    filterCountry.map((country, index) => {
                        return(
                            <CountriesItem country={country} key={index} />
                        )
                    })
                }
            </div>


        </div>
    );
}

export default Countries;