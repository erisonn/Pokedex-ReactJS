import capitalizeFirstLetter from "../../utils/helpers";

const TagItem = ({ tagName }) => {
    return ( 
            <span className="tag-item">{capitalizeFirstLetter(tagName)}</span>
    );
}
 
export default TagItem;