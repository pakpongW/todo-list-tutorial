import React, { Component } from "react";
import TodoDataService from "../services/todo.service";
import { Link } from "react-router-dom";

export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTodo = this.retrieveTodo.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTodo = this.setActiveTodo.bind(this);
        this.removeAllTodo = this.removeAllTodo.bind(this);
        this.serchTitle = this.serchTitle.bind(this);
        
        this.state = {
            tutorials: [],
            currentTodo: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMout(){
        this.retrieveTodo();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.valure;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveTodo() {
        TodoDataService.getAll()
            .then(response => {
                this.setState({
                    tutorials: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveTodo();
        this.setState({
            currentTodo: null,
            currentIndex: -1
        });
    }

    setActiveTodo(todo, index) {
        this.setState({
            currentTodo: todo,
            currentTodo: index
        });
    }

    removeAllTodo() {
        TodoDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchTitle() {
        TodoDataService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    todo: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render(){
        const { searchTitle, todo, currentTodo, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        /> 
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                obClick={this.searchTitle}
                            >
                                Serch 
                            </button>   
                        </div> 
                    </div>
                </div>
                <div className="col-md-6">
                    <h4> TodoList</h4>

                    <ul className="list-group">
                        {todo && 
                            todo.map((tutorial, index) => (
                                <li 
                                    classNamme={
                                        " list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveTodo(todo, index)}
                                    key={index}
                                >
                                    {todo.Title}
                                </li>
                            ))}
                    </ul>

                    <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={this.removeAllTodo}
                    >
                        Remove All
                    </button>             
                </div>
                <div className="col-md-6">
                    {currentTodo ? (
                        <div>
                            <h4>Todo</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                                {currentTodo.title}
                            </div>
                            <div>
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentTodo.description}
                            </div>
                            <div>
                                <label>
                                    <strong>Status:</strong>
                                </label>{" "}
                                {currentTodo.published ? "published" : "Pending"}
                            </div>

                            <Link
                                to={"/tutorials/" + currentTodo.id}
                                className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Todo...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}