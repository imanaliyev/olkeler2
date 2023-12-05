import { useEffect, useState } from "react";
import { Link } from "react-router-dom"




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

  const handleinp = (e) => {
    setInp(e.target.value)

  }

  const changeTheme = () => {
    document.body.classList.toggle("dark")


  }
  const handleSelection = (e) => {
    setOption(e.target.value)





  }
  const filteredRegion = countries.filter(country => country.name.common.toLowerCase().includes(inp.toLocaleLowerCase()) && (option === "" || country.region === option))
  return (
    <div className="App">
      <nav>

        <button className="theme" onClick={changeTheme}><i class="fa-regular fa-sun"></i> <i class="fa-solid fa-moon"></i></button>
        <input placeholder="search by name..." className="search" type="text" onChange={(e) => handleinp(e)} />

        <select onChange={(e) => handleSelection(e)} name="" >
          <option value="">All</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas"> Americas</option>
          <option value="Oceania">Oceania</option>
          <option value="Africa">Africa</option>

        </select>

      </nav>

      <div className="container">

        {filteredRegion.map((x) => (
          <Link to={"/detail/" + x.name.common}>
            <ul key={x.id}>
              <img src={x.flags.png} />
              <li> <b>Country:</b>         {x.name.common}</li>
              <li> <b>Population:  </b>     {x.population}</li>
              <li> <b>Continent:  </b>        {x.region}</li>
              <li> <b>Capital: </b>         {x.capital}</li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
