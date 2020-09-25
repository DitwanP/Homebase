import React from 'react';
import axios from 'axios';
import TodoListComponent from '../components/TodoListComponent';
import { Spring } from 'react-spring/renderprops';


class TodoListView extends React.Component {

state = {
    todoListData: []
}

fetchTodos = () => {
    axios.get('http://127.0.0.1:8000/api/').then(response => {
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
        <Spring 
            from={{ opacity: 0}} 
            to={{ opacity: 1}}
            config={{delay: 1250, duration: 1000}}
        >
            {props => (
                <div style={props} className="todo-component-div">
                    <TodoListComponent todos={this.state.todoListData} getTodos={this.fetchTodos}/>
                </div>
            )}
        </Spring>
    );
}
};

export default TodoListView;