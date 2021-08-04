import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Search.css'

const Search = ({ setSearchTerm, setUrl, url, defaultLink }) => {

    const value = useRef(null)
    const [link, setLink] = useState('')

    const handleClick = () => {
        if(value.current) {
            setSearchTerm(value.current)
            setUrl(url)
        }
    }
    
    return ( 
        <div role="search" className='search'>
            <input aria-label="search term" placeholder='Search...' onChange={(event) => 
                {value.current = event.target.value ; setLink(event.target.value)}
                }/>
            <NavLink to={link && defaultLink + link}><button aria-label="search" onClick={() => handleClick()}>Search</button></NavLink>
        </div>
    );
}
 
export default Search;