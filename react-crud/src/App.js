import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-todo.component";
import Tutorial from "./components/todo.component";
import TutorialsList from "./components/todo-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/todo" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/todo"} className="nav-link">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/todo"]} component={TodoList} />
            <Route exact path="/add" component={AddTodo} />
            <Route path="/todo/:id" component={Todo} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;