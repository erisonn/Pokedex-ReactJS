import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import useDetailsRequest from "../hooks/useDetailsRequest";
import Loading from "../components/Loading/Loading";
import Error from '../components/Error/Error'
import Tags from "../components/Tags/Tags";
import List from "../components/List/List";

const Pokemon = () => {

    const { id } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { itemData, isLoading, error, loadDetails } = useDetailsRequest(url)

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    if(error) {
        return (<Error errorMessage={error} handleError={loadDetails}/>)
    }

    return ( 
        <>
        {isLoading && <Loading/>}
        <button className='back' onClick={()=> goBack()}>Back</button>
        {isLoading ||
        <div className='pokemon'>
            <div className='pokemon-details'>
                <div className='pokemon-image'>
                    <img src ={itemData.img} alt=''/>
                </div>
                <div className='pokemon-name'>
                    <h1>{itemData.name}</h1>
                </div>
                <Tags 
                    title={''} 
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