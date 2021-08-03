import useDetailsRequest from "../../hooks/useDetailsRequest"
import LazyLoad from "react-lazyload"
import { NavLink } from "react-router-dom"
import './Card.css'

const Card = ({itemURL}) => {

    const { itemData, itemLink } = useDetailsRequest(itemURL)

    return (
        <NavLink to={itemLink} className='card-link'>
        <div className="card-item">
            <LazyLoad height={200}  offset={200} once={false}>
            <div className="item-image">
                <img src={itemData.img} alt=""/>
            </div>
            </LazyLoad>
            <div className="item-name">
                <h1>{itemData.name}</h1>
            </div>
        </div>
        </NavLink>
    );
}
 
export default Card;