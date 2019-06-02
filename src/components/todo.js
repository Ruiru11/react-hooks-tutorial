import React from "react";

const Todo = ({ todo, index, completTodo, deleteTodo }) => {
  var buttonText = todo.completed ? "completed" : "complete";
  return (
    <div
      id="main"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
      role="list"
      className="ui divided middle aligned list"
    >
      <div role="listitem" className="item">
        <div className="right floated content">
          <button onClick={() => completTodo(index)} className="ui button">
            {buttonText}
          </button>
          <button onClick={() => deleteTodo(index)} className="ui button">
            Delete
          </button>
        </div>
        <i aria-hidden="true" className="spinner loading icon" />
        <i aria-hidden="true" className="certificate loading icon" />
        <i aria-hidden="true" className="asterisk loading icon" />
        <div className="content">{todo.item}</div>
      </div>
    </div>
  );
};

export default Todo;