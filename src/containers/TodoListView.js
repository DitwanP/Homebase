import React from 'react';
import axios from 'axios';
import TodoListComponent from '../components/TodoListComponent';
import TodoInputForm from '../components/TodoInputForm';
import {animateScroll as scroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoListView extends React.Component {

state = {
    todoListData: []
}

fetchTodos = (event) => {
    axios.get('https://homebase-rd.herokuapp.com/api/todo').then(response => {
        this.setState({
            todoListData: response.data.sort((a,b) => a.id - b.id)
        });
    });
}

componentDidMount(){
    this.fetchTodos();
}

render(){
    return ( 
        <div className="todo-list">
            <div className="BgImage2">
            </div>
            <button className="go-to-top-button" onClick={() => scroll.scrollToTop()} aria-label="scroll to bottom of page">
                <FontAwesomeIcon icon={['fas', 'chevron-up']} />
            </button>
            <TodoInputForm refreshTodos={this.fetchTodos}/>
            <TodoListComponent todos={this.state.todoListData} getTodos={this.fetchTodos}/>
        </div>
    );
}
};

export default TodoListView;