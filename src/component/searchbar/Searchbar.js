import {useHistory} from "react-router-dom";
import {useState} from "react";
import "./Searchbar.css"

export default function Searchbar() {

  const history = useHistory();

  const [terms, setTerms] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`/search?q=${terms}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search: </label>
        <input type="text"
               id="search"
               onChange={(e) => setTerms(e.target.value)}
               required />
      </form>
    </div>
  )
}
