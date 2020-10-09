import React, {Component} from 'react';
import  {BrowserRouter as Router} from 'react-router-dom';
import TodoListView from './containers/TodoListView';
import NavBar from './components/NavBar';
import QuoteOfTheDay from './components/QuoteOfTheDay';
import WeatherInfo from './components/WeatherInfo';
import BgImage from './components/BgImage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faCheck, 
  faTrashAlt, 
  faPlus, 
  faBars, 
  faList, 
  faRedoAlt,
  faChevronDown,
  faChevronUp, } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheck, faTrashAlt, faPlus, faBars, faList, faRedoAlt, faChevronUp, faChevronDown);

class App extends Component {
  render(){
    return (
      <Router>
        <NavBar />
        <BgImage />
        <WeatherInfo />
        <QuoteOfTheDay />
        <TodoListView />
      </Router>
    );
  };
};

export default App;
