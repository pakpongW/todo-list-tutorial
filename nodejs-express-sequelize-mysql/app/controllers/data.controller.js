const db = require("../models");
const Todo = db.todo;
// Create and Save a new todo

    // Create a todo
    const todo = {
        title: "test",
        description: "asdf",
        published: false,
        favourite: false
    };
    const name = "test " 

    for (let i = 501; i < 1001; i++) {

        todo.title = name + i 

        Todo.create(todo)
    } 