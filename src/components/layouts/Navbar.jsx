import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  //Properties--------------------------------------------
  //Hooks-------------------------------------------------
  //Context-----------------------------------------------
  //Methods-----------------------------------------------
  //View--------------------------------------------------

  return (
    <nav>
      <div className="navItem">
        <Link to="/">Home</Link>
      </div>
      <div className="navItem">
        <Link to="/">Modules</Link>
      </div>
      <div className="navItem">
        <Link to="/">Groups</Link>
      </div>
    </nav>
  );
}
export default Navbar;
