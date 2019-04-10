import React, { Component } from 'react'

class TaskForm extends Component {
  state = {
    text: ''
  }

  handleInput = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.text)
  }

  render() {
    const { text } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={text} onChange={this.handleInput} />
        <input type="submit" />
      </form>
    )
  }
}

export default TaskForm
