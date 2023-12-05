import { useEffect, useState } from "react";
import {  Link } from "react-router-dom"




function Home() {
  const [countries, setCountries] = useState([]);
  const [inp, setInp] = useState("");
  const [option, setOption] = useState("")
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries([...data]);
      });
  }, []);

  const handleinp=(e)=>{
    setInp(e.target.value)

  }

  const changeTheme =()=>{
    document.body.classList.toggle("dark")
  }
  const handleSelection=(e)=>{
    setOption(e.target.value)

  }
  return (
    <div className="App">
        <button onClick={changeTheme}>theme</button>
        <input type="text" onChange={(e)=>handleinp(e)}/>
      
            {/* <select onChange={()=>handleSelection(e)} name="" >

                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value=""> America</option>
                <option value="">Oceania</option>
                <option value="">Africa</option>
            </select>
      */}
    
      <div className="container">
    
        {countries.filter(x=>x.name.common.toLowerCase().includes(inp.toLowerCase())).map((x) => (
          <Link to={"detail/name/" + x.name.common}>
            <ul key={x.id}>
              <img src={x.flags.png} />
              <li>{x.name.common}</li>
              <li>{x.population}</li>
              <li>{x.region}</li>
              <li>{x.capital}</li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
