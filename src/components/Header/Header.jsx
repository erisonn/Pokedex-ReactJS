import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return ( 
        <header>
            <div className="header-container">
                <NavLink to='/'>Pokédex</NavLink>
            </div>
        </header>
    );
}
 
export default Header;