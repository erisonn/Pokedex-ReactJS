import Card from "../Card/Card";
import './CardList.css'

const CardList = ( {data} ) => {

    return ( 
        <div className="card-list">
            {data && data.map(item => <Card itemURL ={item.url} key={item.url}/>)}
        </div>
    );
}
 
export default CardList;