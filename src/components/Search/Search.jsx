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
            <div role="search" className='search'>
                <input 
                    aria-label="search term" 
                    placeholder='Search...' 
                    onChange={(event) => { value.current = event.target.value }}
                    />
                <NavLink 
                    aria-label="search" 
                    exact to={!link || link === '' ? `/` : `/search/${link}`} 
                    onClick={() => handleClick()}
                    >
                        Search
                    </NavLink>
            </div>
    );
}
 
export default Search;