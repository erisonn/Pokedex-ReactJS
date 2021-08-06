import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import './Header.css'

const Header = () => {
    return ( 
        <header>
            <div className="header-container">
                <NavLink to='/' className='header-logo'>Pokédex</NavLink>
                <Search/>
            </div>
        </header>
    );
}
 
export default Header;