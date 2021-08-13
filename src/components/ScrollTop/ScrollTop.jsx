import { useEffect, useState } from "react";
import './ScrollTop.scss'

const ScrollTop = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 200);
        })
    }, [scroll])

    if(!scroll) return null

    return ( 
        <button className='scroll-top' onClick={() => window.scrollTo(0, 0)}>Top</button>
    );
}
 
export default ScrollTop;