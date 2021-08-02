import './Tags.css'
import TagItem from "../TagItem/TagItem";

const Tags = ({ title, tags }) => {

    return ( 
        <div className="tags">
            {tags && <h2>{title}</h2>}
            <div className="tag-list">
                {tags && tags.map(tag => <TagItem tagName={tag.type.name} key={tag.type.name}/>)}
            </div>
        </div>
    );
}
 
export default Tags;