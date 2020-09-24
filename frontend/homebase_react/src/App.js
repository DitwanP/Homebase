import React, {Component} from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TodoListView from './containers/TodoListView';
import TodoInputForm from './components/TodoInputForm';
import NavBar from './components/NavBar';
import welcome from './components/welcome';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faTrashAlt, faPlus, faBars, faList} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheck, faTrashAlt, faPlus, faBars, faList)

class App extends Component {

  render(){
    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={welcome}/>
            <Route path="/todo"> 
              <TodoInputForm />
              <TodoListView />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
