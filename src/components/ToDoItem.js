import React from "react";

// WIP
function ToDoItem(props) {
  const { id, text, completed } = props.item;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.onChange(id)}
      ></input>
      <p>{text}</p>
    </div>
  );
}

export default ToDoItem;
