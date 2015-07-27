import React from 'react';
import Router from 'react-router';
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;

import AppView from '../views/appView';
import HomeView from '../views/homeView';
import HelloView from '../views/helloView';
import TodosView from '../views/todosView';
import TodoView from '../views/todoView';

module.exports = (
  <Route name='app' path="/"  handler={AppView}>
    <DefaultRoute handler={HomeView} />
    <Route name="hello" path="/hello"     handler={HelloView} />
    <Route name="todos" path="/todos"     handler={TodosView} />
    <Route name="todo"  path="/todos/:id" handler={TodoView} />
  </Route>
);
