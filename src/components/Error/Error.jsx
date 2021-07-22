import './Error.css'
import Button from '../Button/Button';

const Error = ({errorMessage, handleError}) => {
    return ( 
        <div className="error">
            <p>{errorMessage}</p>
            <Button buttonText={'Try Again'} handleClick={() => handleError()}/>
        </div>
    );
}
 
export default Error;