import React from 'react'

const TodoItem = ({ todo, deleteItem, toggleDone }) => {
  const handleDelete = () => {
    deleteItem(todo.id)
  }

  const handleToggle = () => {
    toggleDone(todo.id)
  }

  return (
    <li>
      <span className={todo.done && 'is-done'} onClick={handleToggle}>
        {todo.task}
      </span>
      <span onClick={handleDelete} className="delete-btn">
        Delete
      </span>
    </li>
  )
}

export default TodoItem
