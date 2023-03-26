import { useState } from "react"
import Output from "./Output";
import './Form.css'

const Form = () => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [output, setOutput] = useState([]);
    const [key, setKey] = useState(0);

    const formHandler = (e) => {
        e.preventDefault();
        setKey(key + 1);
        setOutput([...output, <Output key={key} username={username} age={age}/>])
        setUsername('');
        setAge('');
    }

    return (
        <div className="container-fluid">
            <div className="row pt-4">
                <div className="col-3"></div>
                <div className="col form">
                    <form onSubmit={formHandler}>
                        <label className="form-label" for="username">Username</label>
                        <input className="form-control input" id="username" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
                        <br/>
                        <label className="form-label" for="age">Age</label>
                        <input className="form-control input" id="age" type="text" value={age} onChange={e => setAge(e.target.value)}></input>
                        <br/>
                        <button className="btn btn-primary" type="submit">Add User</button>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
            <div className="row pt-4">
                <div className="col-3"></div>
                <div className="col">
                    <ul className="list-group">
                        {output.map((newUser) => {
                            return newUser
                        })}
                    </ul>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default Form