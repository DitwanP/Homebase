import React from 'react';
import axios from 'axios';
import TodoListComponent from '../components/TodoListComponent';
import TodoInputForm from '../components/TodoInputForm';

class TodoListView extends React.Component {

state = {
    todoListData: []
}

fetchTodos = (event) => {
    axios.get('https://homebase-rd.herokuapp.com/api/todo').then(response => {
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
        <div>
            <div>
                <TodoInputForm refreshTodos={this.fetchTodos}/>
            </div>
            <div className="todo-list-div">
                <TodoListComponent todos={this.state.todoListData} getTodos={this.fetchTodos}/>
            </div>
        </div>
    );
}
};

export default TodoListView;