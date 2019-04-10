import React, { Component } from 'react'

class ToDo extends Component {
  handleToggle = () => {
    const { toggleTask, todo } = this.props
    toggleTask(todo.id)
  }

  handleDelete = () => {
    const { deleteTask, todo } = this.props
    deleteTask(todo.id)
  }

  render() {
    const { todo } = this.props
    return (
      <li
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          color: todo.done ? 'red' : 'green'
        }}
      >
        <span onClick={this.handleToggle}>{todo.task}</span>
        <button onClick={this.handleDelete}>X</button>
      </li>
    )
  }
}

export default ToDo
