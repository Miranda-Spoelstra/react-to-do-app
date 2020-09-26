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

  handleChange = (id) => {
    console.log("changed from here", id);
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      });
      return {
        todos: updatedTodos,
      };
    });
  };

  render() {
    const todoItems = this.state.todos.map((item) => (
      <ToDoItem key={item.id} item={item} onChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
