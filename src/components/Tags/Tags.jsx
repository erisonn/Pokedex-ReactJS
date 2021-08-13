import './Tags.scss'
import TagItem from "../TagItem/TagItem";

const Tags = ({ title, tags }) => {

    return ( 
        <div className="tags">
            {tags && title && <h2>{title}</h2>}
            <div className="tag-list">
                {tags && tags.map(tag => <TagItem tagName={tag.name} key={tag.id}/>)}
            </div>
        </div>
    );
}
 
export default Tags;