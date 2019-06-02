import React, { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/addTodoForm";
import Todo from "./components/todo";
import HeaderDiv from "./components/header";

function App() {
  const data = []
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(response => response.json())
  .then(json => {
    data.push(json)
  })
  const [todos, updateTodo] = useState([
    {
      item: "learn react hooks",
      completed: false
    },
    {
      item: "create a simple app to illustarate the above",
      completed: false
    },
    {
      item: "push to git hub",
      completed: false
    }
  ]);

  const addTodo = item => {
    const newTodos = [...todos, { item }];
    updateTodo(newTodos);
  };

  const completTodo = index => {
    const NewTodos = [...todos];
    NewTodos[index].completed = true;
    updateTodo(NewTodos);
  };

  const deleteTodo = index => {
    const NewTodos = [...todos];
    NewTodos.splice(index, 1);
    updateTodo(NewTodos);
  };
  return (
    <div id="role" role="list" className="ui divided relaxed list">
      <HeaderDiv />
      <div role="listitem" className="item">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completTodo={completTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
