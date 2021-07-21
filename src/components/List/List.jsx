import ListItem from "../ListItem/ListItem";
import './List.css'

const List = ( {data} ) => {

    return ( 
        <div className="list">
            {data.map(item => <ListItem itemURL ={item.url} key={item.url}/>)}
        </div>
    );
}
 
export default List;