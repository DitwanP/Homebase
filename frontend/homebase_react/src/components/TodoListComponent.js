import React from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from 'react-spring/renderprops';

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
    <div className="scrollable-div">
      <Transition
      items={todos} keys={todo => todo.id}
      from={{ transform: 'translate3d(-1500px,0,0)' }}
      enter={{ transform: 'translate3d(0px,0,0)' }}
      leave={{ transform: 'translate3d(1500px,0,0)' }}>
          {todo => props =>
            <div className="todo-component-div" style={props} value={todo.isComplete}>
              <h1 className="todo-title" value={todo.isComplete}> {todo.title} - </h1>
              <h2 className="todo-content" value={todo.isComplete}> {todo.content} </h2>
              <button type="submit" className="todo-delete-btn" onClick={() => handleDelete(todo.id)}>
                <FontAwesomeIcon icon="trash-alt" />
              </button>
              <button value={todo.isComplete} className="todo-complete-btn" onClick={() => handleComplete(todo)}>
                <FontAwesomeIcon icon="check" />
              </button>
            </div>
          }
      </Transition>
    </div>
  )
};

export default TodoListComponent;