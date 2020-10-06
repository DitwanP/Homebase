import React from "react";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoListComponent = ({todos, getTodos}) => {

  function handleComplete(todoToUpdate){
    const updated = {
      id: todoToUpdate.id,
      title: todoToUpdate.title,
      content: todoToUpdate.content,
      isComplete: !todoToUpdate.isComplete
    }

    axios.put(`http://127.0.0.1:8000/api/todo/${todoToUpdate.id}/update/`, updated)
    .then(getTodos)
  }

  function handleDelete(idToDelete){
    axios.delete(`http://127.0.0.1:8000/api/todo/${idToDelete}/delete/`)
    .then(getTodos)
  };

  return ( 
    todos.map(todo => 
      <ul className="todo-list-ul" key={todo.id} value={todo.isComplete}>
        <li className="todo-title" value={todo.isComplete}> {todo.title} - </li>
        <li className="todo-content" value={todo.isComplete}> {todo.content} </li>
        <button type="submit" className="todo-delete-btn" onClick={() => handleDelete(todo.id)}>
          <FontAwesomeIcon icon="trash-alt" />
        </button>
        <button value={todo.isComplete} className="todo-complete-btn" onClick={() => handleComplete(todo)}>
          <FontAwesomeIcon icon="check" />
        </button>
        <li className="divider"></li>
      </ul>
    )
  )
};

export default TodoListComponent;