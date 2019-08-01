import React, { Component } from 'react'
import './App.css'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

class App extends Component {
  state = {
    todos: [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: false },
      { id: 3, task: 'Finish React To Do List', done: false }
    ]
  }

  toggleDone = id => {
    const { todos } = this.state

    // targetItem is object
    const targetItem = todos.find(item => item.id == id)

    // otherItems is array
    const otherItems = todos.filter(item => item.id != id)

    this.setState({
      todos: [
        ...otherItems,
        {
          ...targetItem, // id, task, done
          done: !targetItem.done
        }
      ]
    })
  }

  deleteItem = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id != id)
    })
  }

  addItem = item => {
    this.setState({
      todos: [...this.state.todos, item]
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div>
        <TodoForm addItem={this.addItem} />
        <ul id="list">
          {/* Display Not-done tasks */}
          {todos
            .filter(todo => !todo.done)
            .map(todo => (
              <TodoItem
                toggleDone={this.toggleDone}
                deleteItem={this.deleteItem}
                key={todo.id}
                todo={todo}
              />
            ))}

          {/* Display done tasks */}
          {todos
            .filter(todo => todo.done)
            .map(todo => (
              <TodoItem
                toggleDone={this.toggleDone}
                deleteItem={this.deleteItem}
                key={todo.id}
                todo={todo}
              />
            ))}
        </ul>
      </div>
    )
  }
}

export default App
