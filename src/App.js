import React, { Component } from "react";
import ToDoItem from "./components/ToDoItem";
import todoData from "./todoData";

// WIP
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <ToDoItem key={item.id} item={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
