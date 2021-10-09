import React, { Component } from 'react'
import './App.css';
import Plan from './Plan';

class App extends Component {
  state= {
    items: [],
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleAdd = () => {
    if(this.state.text !== ""){
      const items = [...this.state.items,this.state.text]
      this.setState({
        items: items,
        text: ""
      })
    }
  }

  handleDelete = (id) => {
    const oldItems = [...this.state.items]
    const items = oldItems.filter((el,i) => i !== id)

    this.setState({items: items})
  }
  
  render() {
    return (
      <div className="container">
        <h1>Todo List App</h1>
        <div className="input-box">
          <input type="text" placeholder="Enter your plan" className="input" value={this.state.text} onChange={this.handleChange} />
          <button type="button" onClick={this.handleAdd}>Add</button>
        </div>
        <ul>
          {this.state.items.map((value,i) => <Plan key={i} id={i} value={value} sendData={this.handleDelete} />)}
        </ul>
      </div>
    )
  }
}

export default App;
