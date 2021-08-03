import './Loading.css'
import loadingSVG from './loading.svg'

const Loading = () => {
    return ( 
        <div className='loading'>
            <img src={loadingSVG} alt="Loading..."/>
        </div>
    );
}
 
export default Loading;