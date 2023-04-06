import { useState } from "react"
import Output from "./Output";
import './Form.css'

const Form = () => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [output, setOutput] = useState([]);
    const [key, setKey] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');

    const formHandler = (e) => {
        e.preventDefault();
        if(username.trim().length===0) {
            setErrorMsg('Please enter a valid username.');
            return;
        }
        if(age.trim().length===0 || +age < 1) {
            setErrorMsg('Age must be above 1.');
            return;
        }
        setKey(key + 1);
        setOutput([...output, <Output key={key} username={username} age={age}/>])
        setUsername('');
        setAge('');
    }

    const toggleError = () => {
        setErrorMsg('');
    }

    return (
        <div className="container-fluid">
            <div className="row pt-4">
                <div className="col-3"></div>
                <div className="col form">
                    <form onSubmit={formHandler}>
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="form-control input" id="username" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
                        <br/>
                        <label className="form-label" htmlFor="age">Age</label>
                        <input className="form-control input" id="age" type="text" value={age} onChange={e => setAge(e.target.value)}></input>
                        <br/>
                        <button className="btn btn-primary" type="submit">Add User</button>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
            {errorMsg && (
                <div className="overlay active" onClick={toggleError}>
                    <div className="overlay-content">
                        <p>{errorMsg}</p>
                        <button className="btn btn-warning" onClick={() => setErrorMsg('')}>Ok</button>
                    </div>
                </div>
            )}
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