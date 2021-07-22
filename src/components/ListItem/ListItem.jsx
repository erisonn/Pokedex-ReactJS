import { useEffect } from "react"
import useApiRequest from "../hooks/useApiRequest"
import './ListItem.css'

const ListItem = ({itemURL}) => {

    const { itemData, isLoading } = useApiRequest(itemURL)

    useEffect(() => {
        console.log("Render", itemData.name)
    })

    return (
        <div className="list-item">
            {isLoading && <span>...</span>}
            <div className="item-image">
                <img src={itemData.img} alt=""/>
            </div>
            <div className="item-name">
                <h1>{itemData.name}</h1>
            </div>
        </div>
    );
}
 
export default ListItem;