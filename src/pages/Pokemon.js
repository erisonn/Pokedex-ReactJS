import React, { useEffect } from "react";
import { formattedPokemonTypes, formattedPokemonStats, formattedPokemonCombatStats } from "../utils/helpers";
import { useParams } from "react-router-dom";
import useDetailsRequest from "../hooks/useDetailsRequest";
import Loading from "../components/Loading/Loading";
import Error from '../components/Error/Error'
import Tags from "../components/Tags/Tags";
import VerticalList from "../components/VerticalList/VerticalList";
import Card from "../components/Card/Card";

const Pokemon = () => {

    const { id } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { itemData, isLoading, error, loadDetails } = useDetailsRequest(url)

    useEffect(() => {
        document.title = `Pokédex | ${itemData.name}`
    })


    if(error) {
        return (<Error errorMessage={error} handleError={loadDetails}/>)
    }

    if(isLoading) {
        return <Loading/>
    }

    return ( 
        <div className='pokemon'>
            <div className='pokemon-details'>
                <Card itemName={itemData.name} itemLink={`/pokemon/${itemData.id}`} itemIMG={itemData.img}/>
                <Tags tags={formattedPokemonStats(itemData)}/>
                <Tags title={'Types'} tags={formattedPokemonTypes(itemData)} />
            </div>
            <VerticalList listName={'Stats'} listItems={formattedPokemonCombatStats(itemData)}/>
        </div>
    );
}

export default Pokemon;