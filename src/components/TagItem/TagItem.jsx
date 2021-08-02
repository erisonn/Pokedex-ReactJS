import capitalizeFirstLetter from "../../utils/helpers";

const TagItem = ({ tagName }) => {
    return ( 
            <span className={`tag-item type-${tagName}`}>{tagName}</span>
    );
}
 
export default TagItem;