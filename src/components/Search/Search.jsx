import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Search.css'

const Search = () => {

    const value = useRef(null)
    const [link, setLink] = useState(null)

    const handleClick = () => {
        if(value.current) {
            setLink(value.current)
        }
    }
    
    return ( 
        <div>
            <div role="search" className='search'>
                <input aria-label="search term" placeholder='Search...' onChange={(event) => {value.current = event.target.value ; setLink(event.target.value)}}/>
                <NavLink to={link === null? '/': `/search/${link}`}><button aria-label="search" onClick={() => handleClick()}>Search</button></NavLink>
            </div>
        </div>
    );
}
 
export default Search;