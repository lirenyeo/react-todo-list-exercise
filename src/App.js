import React, { Component } from 'react'
import './App.css'
import ToDo from './ToDo'
import TaskForm from './Form'

class App extends Component {
  state = {
    todos: [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: true }
    ]
  }

  addTask = text => {
    const { todos } = this.state
    const newTask = {
      id: todos.length + 1,
      task: text,
      done: false
    }
    this.setState({
      todos: [newTask, ...todos]
    })
  }

  deleteTask = id => {
    const { todos } = this.state
    const updatedTodos = todos.filter(item => item.id != id)
    this.setState({
      todos: updatedTodos
    })
  }

  toggleTask = id => {
    const { todos } = this.state
    const updatedTodos = todos.filter(item => item.id != id)
    const task = todos.find(item => item.id == id)
    this.setState({
      todos: [
        ...updatedTodos,
        {
          ...task,
          done: !task.done
        }
      ]
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div>
        <h1>To Do List</h1>
        <ul>
          {todos.map(todo => (
            <ToDo
              deleteTask={this.deleteTask}
              toggleTask={this.toggleTask}
              todo={todo}
            />
          ))}
        </ul>
        <TaskForm addTask={this.addTask} />
      </div>
    )
  }
}

export default App
