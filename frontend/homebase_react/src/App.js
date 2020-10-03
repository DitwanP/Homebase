import React, {Component} from 'react';
import  {BrowserRouter as Router} from 'react-router-dom';
import TodoListView from './containers/TodoListView';
import TodoInputForm from './components/TodoInputForm';
import NavBar from './components/NavBar';
import QuoteOfTheDay from './components/QuoteOfTheDay';
import BgImage from './components/BgImage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTrashAlt, faPlus, faBars, faList, faRedoAlt} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheck, faTrashAlt, faPlus, faBars, faList, faRedoAlt)

class App extends Component {

  render(){
    return (
      <Router>
        <NavBar />
        <BgImage />
        <QuoteOfTheDay />
        <TodoInputForm />
        <TodoListView />
      </Router>
    );
  };
};

export default App;
