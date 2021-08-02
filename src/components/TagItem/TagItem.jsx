import capitalizeFirstLetter from "../../utils/helpers";

const TagItem = ({ tagName }) => {
    return ( 
            <span className={`tag-item type-${tagName}`}>{tagName && capitalizeFirstLetter(tagName)}</span>
    );
}
 
export default TagItem;