import React from "react"
import './Form.css'
import Button from "./Button"

const Form = () => {
    return (
        <form className="form-control p-4 form">
            <div className="row mb-3">
                <label className="form-label username">Username</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="row mb-3">
                <label className="form-label age">Age (Years)</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="">
                <Button />
            </div>
        </form>
    )
}

export default Form