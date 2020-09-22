import React, {Component} from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TodoListView from './containers/TodoListView';
import TodoInputForm from './components/TodoInputForm';
import NavBar from './components/NavBar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTrashAlt, faPlus, faBars, faList} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheck, faTrashAlt, faPlus, faBars, faList)

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/todo" component={TodoInputForm} />
          <Route path="/todo" component={TodoListView} />
        </div>
      </Router>
    );
  };
};

export default App;
