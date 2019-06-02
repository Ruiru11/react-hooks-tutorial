import React, { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="ui success form">
      <div className="field">
        <label>Add Todo Item</label>
        <div className="ui input">
          <input
            type="text"
            placeholder="Add todo item"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="ui button">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;