import './List.css'
import capitalizeFirstLetter from '../../utils/helpers'

const List = ({ listName, listItems }) => {
    return ( 
        <div className='list'>
            <h2>{listName}</h2>
            <ul>
                {listItems && listItems.map(item => <li key={item.stat.name}>{capitalizeFirstLetter(item.stat.name)}: {item.base_stat}</li>)}
            </ul>
        </div>
     );
}
 
export default List;