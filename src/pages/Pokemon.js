import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDetailsRequest from "../hooks/useDetailsRequest";
import Loading from "../components/Loading/Loading";
import Error from '../components/Error/Error'
import Tags from "../components/Tags/Tags";
import List from "../components/List/List";
import Card from "../components/Card/Card";

const Pokemon = () => {

    const { id } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { itemData, isLoading, error, loadDetails } = useDetailsRequest(url)

    useEffect(() => {
        document.title = `Pokedéx | ${itemData.name}`
    })

    if(error) {
        return (<Error errorMessage={error} handleError={loadDetails}/>)
    }

    return ( 
        <>
        {isLoading && <Loading/>}
        {isLoading ||
        <div className='pokemon'>
            <div className='pokemon-details'>
                <Card itemName={itemData.name} itemLink={`/pokemon/${itemData.id}`} itemIMG={itemData.img}/>
                <Tags
                    tags={[
                        {'type': {'name': itemData.height}, 'slot' : 1}, 
                        {'type': {'name': itemData.weight}, 'slot' : 2}, 
                        {'type': {'name': itemData.ability}, 'slot' : 3}
                        ]}/>
                <Tags title={'Types'} tags={itemData.types} />
            </div>
            <List listName={'Stats'} listItems={itemData.stats}/>
        </div>}
        </>
    );
}

export default Pokemon;