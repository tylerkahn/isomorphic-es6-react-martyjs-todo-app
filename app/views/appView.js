import React from 'react';

import Router from 'react-router';
let {Link, RouteHandler} = Router;

import ReactBootstrap from 'react-bootstrap';
let {Nav, Navbar} = ReactBootstrap;

import ReactRouterBootstrap from 'react-router-bootstrap';
let {NavItemLink} = ReactRouterBootstrap;


export default class AppView extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar brand={<Link to="app">Isomorphic Todo</Link>}>
          <Nav navbar>
            <NavItemLink to="hello">Hello</NavItemLink>
            <NavItemLink to="todos">Todos</NavItemLink>
          </Nav>
        </Navbar>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
}

