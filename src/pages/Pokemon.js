import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDetailsRequest from "../hooks/useDetailsRequest";
import Loading from "../components/Loading/Loading";
import Error from '../components/Error/Error'
import Tags from "../components/Tags/Tags";

const Pokemon = () => {

    const { id } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { itemData, isLoading, error, loadDetails } = useDetailsRequest(url)

    useEffect(() => {
        console.log(itemData.types)
    })

    if(error) {
        return (<Error errorMessage={error} handleError={loadDetails}/>)
    }

    return ( 
        <div className='item-details'>
            {isLoading && <Loading/>}
            <div className='detail-image'>
                <img src ={itemData.img}/>
            </div>
            <div className='detail-name'>
                <h1>{itemData.name}</h1>
            </div>
            <ul className='detail-list'>
                <li>{itemData.height}</li>
                <li>{itemData.weight}</li>
                <li>{itemData.ability}</li>
            </ul>
            <Tags title={'Types'} tags={itemData.types} />
        </div>
    );
}
//{itemData.types && itemData.types.map(type => <Tags tagName={type.type.name}/>)}
export default Pokemon;