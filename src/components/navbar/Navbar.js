import {Link} from "react-router-dom";
import "./Navbar.css"
import Searchbar from "../searchbar/Searchbar";
import {useTheme} from "../../hooks/useTheme";

export default function Navbar() {

  const { color } = useTheme();

  return (
    <div className="navbar" style={{background: color}}>
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
