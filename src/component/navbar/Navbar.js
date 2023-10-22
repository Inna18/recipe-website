import {Link} from "react-router-dom";
import "./Navbar.css"
import Searchbar from "../searchbar/Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Home</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          Create a recipe
        </Link>
      </nav>
    </div>
  )
}
