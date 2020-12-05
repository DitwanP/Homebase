import React from 'react';
import axios from 'axios';
import TodoListComponent from '../components/TodoListComponent';
import TodoInputForm from '../components/TodoInputForm';
import {animateScroll as scroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const windowWidth = window.screen.width * window.devicePixelRatio
const windowHeight = window.screen.height * window.devicePixelRatio

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
        <div className="BgImage2">
            <img src={`https://source.unsplash.com/${windowWidth}x${windowHeight}/daily?blur`} alt=''></img>
            <button className="go-to-top-button" onClick={() => scroll.scrollToTop()} aria-label="scroll to bottom of page">
                <FontAwesomeIcon icon={['fas', 'chevron-up']} />
            </button>
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