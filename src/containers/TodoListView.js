import React from 'react';
import TodoInputForm from '../components/TodoInputForm';
import {animateScroll as scroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoListView extends React.Component {
render(){
    return ( 
        <div className="todo-list">
            <button className="go-to-top-button" onClick={() => scroll.scrollToTop()} aria-label="scroll to top of page">
                <FontAwesomeIcon icon={['fas', 'chevron-up']} />
            </button>
            <TodoInputForm/>
            <div className="BgImage2"></div>
        </div>
    );
}
};

export default TodoListView;