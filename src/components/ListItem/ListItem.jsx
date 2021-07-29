import useDetailsRequest from "../../hooks/useDetailsRequest"
import { NavLink } from "react-router-dom"
import './ListItem.css'

const ListItem = ({itemURL}) => {

    const { itemData, itemLink, isLoading } = useDetailsRequest(itemURL)

    return (
        <NavLink to={itemLink} className='list-link'>
        <div className="list-item">
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
 
export default ListItem;