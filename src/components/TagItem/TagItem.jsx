
const TagItem = ({ tagName }) => {
    return ( 
            <span className={`tag-item type-${tagName.toLowerCase()}`}>{tagName}</span>
    );
}
 
export default TagItem;