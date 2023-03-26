import './list.css'

const Output = (props) => {

    const info = <p>{props.username} is {props.age} years old.</p>

    return (
        <li className="list-group-item list-group-item-success list">
            {props.username.length > 0 && props.age.length > 0 ? info : null}
        </li>
    );
}

export default Output