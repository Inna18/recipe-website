import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" class="brand">
          <h1>Home</h1>
        </Link>
        <Link to="/create">
          Create a recipe
        </Link>
      </nav>
    </div>
  )
}
