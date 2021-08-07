import Card from "../Card/Card";
import './CardList.css'

const CardList = ( { data } ) => {

    return ( 
        <div className="card-list">
            {data && data.map(item => <Card itemIMG ={item.img} itemName={item.name} itemLink={item.link} key={item.id}/>)}
        </div>
    );
}
 
export default CardList;