import Card from "../Card/Card";
import './CardList.css'

const CardList = ( {data, searchTerm} ) => {

    return ( 
        <div className="card-list">
            {data && data.filter((val) => {
        if (searchTerm === null) {
          return val
        } else if (val.name.includes(searchTerm)) {
          return val
        }
          return false
      }).map(item => <Card itemURL ={item.url} key={item.url}/>)}
        </div>
    );
}
 
export default CardList;