import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import './Header.scss'
import  github  from './github.png'

const Header = () => {
    return ( 
        <header>
            <div className="header-container">
                <NavLink to='/' className='header-logo'>Pokédex</NavLink>
                <Search/>
                <a href="https://github.com/erisonn/Pokedex-ReactJS" target='_blank' rel='noreferrer'><img src={github} alt="Github" /></a>
            </div>
        </header>
    );
}
 
export default Header;