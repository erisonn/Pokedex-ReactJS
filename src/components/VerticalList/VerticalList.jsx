import './VerticalList.scss'

const VerticalList = ({ listName, listItems }) => {
    return ( 
        <div className='vertical-list'>
            <h2>{listName}</h2>
            <ul>
                {listItems && listItems.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
     );
}
 
export default VerticalList;