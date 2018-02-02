//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, NavLink, Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/main.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my daseboard component.
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component.
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense component.
  </div>
);

const HelpPage = () => (
  <div>
    This is from my help component.
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
    <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink>
    <NavLink to="/create" activeClassName="is-active">Create </NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit </NavLink>
    <NavLink to="/help" activeClassName="is-active">Help </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header/>
    <Switch>
      <Route
        path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" activeClassName="is-active" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));