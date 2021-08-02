import useDetailsRequest from "../../hooks/useDetailsRequest"
import { NavLink } from "react-router-dom"
import './Card.css'

const Card = ({itemURL}) => {

    const { itemData, itemLink } = useDetailsRequest(itemURL)

    return (
        <NavLink to={itemLink} className='card-link'>
        <div className="card-item">
            <div className="item-image">
                <img src={itemData.img} alt=""/>
            </div>
            <div className="item-name">
                <h1>{itemData.name}</h1>
            </div>
        </div>
        </NavLink>
    );
}
 
export default Card;