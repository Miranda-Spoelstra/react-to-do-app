import React from "react";

// WIP
function ToDoItem(props) {
  const { text, completed } = props.item;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => console.log("changed!")}
      ></input>
      <p>{text}</p>
    </div>
  );
}

export default ToDoItem;
