import "./navbar.css";
import CartWidget from "./CartWidget";
import  { Link } from "react-router-dom";

function Navbar () {
return (
    <div className="container">
<div className="logo">
  <img src="https://img.freepik.com/vector-gratis/instagram-nuevo-icono_1057-2227.jpg?w=740&t=st=1679004159~exp=1679004759~hmac=2a6d957dd04458cac651c840b9823326d699b213c5e9072926d0b7f224c45846" alt="" width="130"/>
  </div>
<nav>
  <ul>
    <li>
      <Link to="/"> Inicio</Link>
    </li>
    <li>
      <Link to="/category/cursosvirtuales">Cursos virtuales</Link>
    </li>
    <li>
    <Link to="/category/cursospresenciales">Cursos presenciales</Link>
    </li>
    <li>
      <Link to=""><CartWidget/></Link>
    </li>

  </ul>
  </nav>
</div>

)

}

export default Navbar;