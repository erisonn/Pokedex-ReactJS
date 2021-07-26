import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDetailsRequest from "../components/hooks/useDetailsRequest";
import Loading from "../components/Loading/Loading";

const Pokemon = () => {

    const { order } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${order}`
    const { itemData, isLoading } = useDetailsRequest(url)

    useEffect(() => {
        console.log(itemData.height)
    })

    return ( 
        <div className='item-details'>
            {isLoading && <Loading/>}
            <div>
                <img src ={itemData.img}/>
            </div>
            <div className='detail-name'>
                <h1>{itemData.name}</h1>
            </div>
            <ul className='detail-list'>
                <li>{itemData.height}</li>
                <li>{itemData.weight}</li>
            </ul>
        </div>
    );
}
 
export default Pokemon;