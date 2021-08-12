import LazyLoad from "react-lazyload"
import { NavLink } from "react-router-dom"
import './Card.css'

const Card = ({ itemIMG, itemName, itemLink }) => {

    return (
        <NavLink to={itemLink} className='card-link'>
        <div className="card-item">
            <LazyLoad height={115}  offset={200} once={false}>
            <div className="item-image">
                <img src={itemIMG} alt=""/>
            </div>
            </LazyLoad>
            <div className="item-name">
                <h1>{itemName}</h1>
            </div>
        </div>
        </NavLink>
    );
}
 
export default Card;