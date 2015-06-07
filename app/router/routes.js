var React = require('react');
import Router from 'react-router';
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

import TodosView from '../views/todosView';
import HelloView from '../views/hello';
import AppView from '../views/appView';

module.exports = (
  <Route name='app' path="/"  handler={AppView}>
    <DefaultRoute handler={require('../views/home')} />
    <Route name="hello" path="/hello"     handler={HelloView} />
    <Route name="todos" path="/todos"     handler={TodosView} />
    <Route name="todo"  path="/todos/:id" handler={require('../views/todo')} />
  </Route>
);
