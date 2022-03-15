import './Button.css';

function Button(props) {

    // jsx code button component.
    // it take dynamic value through props.val
    return (
        <button className="btn">{props.val}</button>
    );
}

export default Button;