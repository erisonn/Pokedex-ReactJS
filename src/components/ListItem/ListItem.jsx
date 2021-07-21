import { useEffect } from "react"
import useApiRequest from "../hooks/useApiRequest"
import './ListItem.css'

const ListItem = ({itemURL}) => {

    const { itemData, isLoading } = useApiRequest(itemURL)

    return (
        <div className="list-item">
            <div className="item-image">
                {isLoading && <span>...</span>}
                <img src={itemData.img} alt=""/>
            </div>
            <div className="item-name">
                <h1>{itemData.name}</h1>
            </div>
        </div>
    );
}
 
export default ListItem;