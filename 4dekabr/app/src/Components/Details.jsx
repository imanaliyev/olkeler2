import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
function Details() {
    let { id } = useParams();
    const [country, setCountry] = useState([])
   
    useEffect(() => {
        

        fetch("https://restcountries.com/v3.1/name/" + id )
        .then(res=>res.json())
        .then(data=>{
            setCountry(data)
            
        })
     
    }, [])
    console.log(country);
  return (
      <div className='detail'>
       {country.map(x=>
        <ul>
             <img src={x.flags.png} />
              <li> Country:   {x.name.common}</li>
              <li> Population:   {x.population}</li>
              <li> Continent:   {x.region}</li>
              <li>Capital:    {x.capital}</li>
              <li>Domain:    {x.tld}</li>
              <li>Sub-region:   {x.subregion}</li>
        </ul>)}



    </div>
  )
}

export default Details