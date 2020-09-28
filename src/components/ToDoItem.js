import React from "react";

// WIP
function ToDoItem(props) {
  const { id, text, completed } = props.item;
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.onChange(id)}
      ></input>
      <p style={completed ? completedStyle : null}>{text}</p>
    </div>
  );
}

export default ToDoItem;
