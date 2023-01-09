import { Link } from "react-router-dom";
function MenuBar() {
    return (
       
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <Link to="/novoprojeto">Novo projeto</Link>
              </li>
            </ul>
          </nav>
    )
}
export default MenuBar