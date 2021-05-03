import React, {Component} from 'react';
import  {BrowserRouter as Router} from 'react-router-dom';
import TodoListView from './containers/TodoListView';
import NavBar from './components/NavBar';
import WeatherInfo from './components/WeatherInfo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faCheck, 
  faTrashAlt,
  faEdit, 
  faPlus, 
  faBars, 
  faList,
  faCheckSquare, 
  faRedoAlt,
  faChevronDown,
  faChevronUp, } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheck, faTrashAlt, faEdit, faPlus, faBars, faList, faCheckSquare, faRedoAlt, faChevronUp, faChevronDown);

class App extends Component {
  render(){
    return (
      <Router>
        <NavBar />
        <WeatherInfo />
        <TodoListView />
      </Router>
    );
  };
};

export default App;
