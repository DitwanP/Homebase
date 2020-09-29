import React from 'react';
import axios from 'axios';
import TodoListComponent from '../components/TodoListComponent';

class TodoListView extends React.Component {

state = {
    todoListData: []
}

fetchTodos = () => {
    axios.get('http://127.0.0.1:8000/api/todo').then(response => {
        this.setState({
            todoListData: response.data
        });
    });
}

componentDidMount(){
    this.fetchTodos();
}

render(){
    return ( 
        <div className="todo-component-div">
            <TodoListComponent todos={this.state.todoListData} getTodos={this.fetchTodos}/>
        </div>
    );
}
};

export default TodoListView;