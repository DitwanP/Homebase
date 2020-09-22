import React, {Component} from 'react';
import TodoListView from './containers/TodoListView';
import TodoInputForm from './components/TodoInputForm';
import NavBar from './components/NavBar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTrashAlt, faPlus, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheck, faTrashAlt, faPlus, faBars)

class App extends Component {

  render(){
    return (
      <div className="App">
        <NavBar />
        <TodoInputForm />
        <TodoListView />
      </div>
    );
  };
};

export default App;
