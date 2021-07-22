import './Button.css'

const Button = ({ buttonText, handleClick }) => {
    return ( 
        <button onClick={() => handleClick()} className='handle-click'>{buttonText}</button>
    );
}
 
export default Button;