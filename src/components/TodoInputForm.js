import React, {useState, useEffect} from 'react';
import { FormGroup, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoInputForm = () =>{

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    useEffect(() => {
        const todoData = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(todoData);

        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, []);

    useEffect(() => {
        const todosJson = JSON.stringify(todos);
        localStorage.setItem("todos", todosJson)
    }, [todos]);

    const updateTodo = e => {
        setTodo(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault()
        
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false
        }

        setTodos([...todos].concat(newTodo))
        setTodo("")
    };

    function deleteTodo(id) {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)

        setTodos(updatedTodos);
    };

    function toggleComplete(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodos(updatedTodos)
    };

    return (
        // Bootsrap form group for the input of the todo data.
        <div className="input-form-container">
            <Form noValidate onSubmit={handleSubmit} className="todo-form">
                <Form.Row bsPrefix="description-row">
                    <Col bsPrefix="input-columns">
                        <FormGroup bsPrefix="todo-description-form">
                            <input 
                                className="todo-description-input"
                                label="todo description"
                                onChange={updateTodo} 
                                value={todo}
                                required
                                autoComplete="off"
                            /> 
                            <label htmlFor="todo-description-input" className="description-label"> 
                                <span className="description-span"> Todo: </span>
                            </label>
                        </FormGroup>
                        <Form.Group bsPrefix="add-todo-button-container">
                            <Button 
                                type="submit"
                                variant="primary" 
                                bsPrefix='add-todo-button'
                                aria-label="add to todo list"> 
                                <FontAwesomeIcon icon="plus"/>
                            </Button>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
            {todos.map((todo) => 
                <div className="todo-component-div" key={todo.id} value={todo.completed}>
                    <div className="todo-content" value={todo.completed}>{todo.text}</div>
                    <div className="btn-container"> 
                        <button className="todo-complete-btn" value={todo.completed} onClick={() => toggleComplete(todo.id)}>
                            <FontAwesomeIcon icon="check" />
                        </button>
                        <button className="todo-delete-btn" onClick={() => deleteTodo(todo.id)}>
                            <FontAwesomeIcon icon="trash-alt" />
                        </button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default TodoInputForm;
