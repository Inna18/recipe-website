import {Link} from "react-router-dom";
import "./Navbar.css"
import Searchbar from "../searchbar/Searchbar";
import {useTheme} from "../../hooks/useTheme";
import navbarIcon from "../../assets/navbar-icon.svg";

export default function Navbar() {

  const { color } = useTheme();

  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <Link to="/" className="brand">
          <h1>
            <img src={navbarIcon} alt="navbar-icon"/>
          </h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          Create a recipe
        </Link>
      </nav>
    </div>
  )
}
