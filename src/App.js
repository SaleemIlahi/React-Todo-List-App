import React, { useState } from 'react'
import "./App.css"

const App = () => {
    let [text, setText] = useState("")
    let [item, setItem] = useState([])

    const handleChange = (e) => {
        setText(text = e.target.value)
    }

    const handleClick = () => {
        const itemsList = [...item, text]
        setItem(item = itemsList)
        setText(text = "")
    }

    const handleDelete = (e) => {
        e.target.parentElement.remove()
    }

    return (
        <div className="container-md mt-5">
            <div className="row">
                <div className="col">
                    <h1 className="text-center"><img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />Todo List App</h1>
                    <div className="input-box d-flex justify-content-between">
                        <input type="text" placeholder="Enter your plan" value={text} className="form-control" onChange={handleChange} />
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Add</button>
                    </div>
                    <div className="col-8 mx-2">
                    <ul className="list-group">
                        {item.map((value, i) => <li key={i} className="list-group-item list-group-item-primary p-3 my-3 d-flex justify-content-between align-item-center">{value} <i className="far fa-trash-alt text-danger" onClick={handleDelete}></i></li>)}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App