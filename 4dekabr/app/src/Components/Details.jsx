import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
function Details() {
    let { name } = useParams();
    const [country, setCountry] = useState(null)
    console.log(name)
    useEffect(() => {
        

        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res=>res.json())
        .then(data=>{
            setCountry(data)
            console.log(country);
        })
     
    }, [])
    
  return (
      <div>
{console.log(country)}
{
    country.map(x=>
    <ul>
        <li>
            {x.name.common}
        </li>
    </ul>
    )
}

    </div>
  )
}

export default Details