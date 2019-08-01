import React, { Component } from 'react'

let idCount = 10

class TodoForm extends Component {
  state = {
    text: ''
  }

  handleInput = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addItem({
      id: idCount++,
      task: this.state.text,
      done: false
    })
  }

  render() {
    const { text } = this.state
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <input
          value={text}
          onChange={this.handleInput}
          id="input"
          type="text"
          placeholder="Type something..."
        />
        <span className="form-span bottom" />
        <span className="form-span right" />
        <span className="form-span top" />
        <span className="form-span left" />
        <button id="btn" ype="submit">
          Add Task
        </button>
      </form>
    )
  }
}

export default TodoForm
