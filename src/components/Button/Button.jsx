import './Button.css'

const Button = ({ buttonText, handleClick }) => {
    return ( 
        <div className="handle-click">
            <button onClick={() => handleClick()}>{buttonText}</button>
        </div>
    );
}
 
export default Button;