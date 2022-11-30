import { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  let INITIAL_STATE = [
    { msg: "i am a todo", isComplete: true, id: uuid() },
    { msg: "i am a 2nd todo", isComplete: false, id: uuid() },
    { msg: "i am a 3rd todo", isComplete: false, id: uuid() },
  ];

  const [Todos, SetTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    SetTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };
  const removeTodo = (todoToRemove) => {
    SetTodos((todos) => todos.filter((t) => t.id !== todoToRemove.id));
  };
  const completeTodo = (todoToComplete) => {
    let newTodos = [...Todos];
    let changed = newTodos.findIndex((todo) => todo.id === todoToComplete.id);
    console.log("changed b4", newTodos[changed]);

    newTodos[changed].isComplete === true
      ? (newTodos[changed].isComplete = false)
      : (newTodos[changed].isComplete = true);
    console.log("changed after", newTodos[changed]);
    SetTodos(newTodos);
    // let newTodos = Todos.filter((t) => t.id !== todoToComplete.id);
    // SetTodos([...newTodos, Todos[changed]]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <NewTodoForm addTodo={addTodo} />
      </div>
      {/* <NewTodoForm addTodo={addTodo} /> */}
      <div className="TodoList">
        {Todos.map(({ msg, isComplete, id }) => (
          <Todo
            key={id}
            id={id}
            msg={msg}
            isComplete={isComplete}
            remove={removeTodo}
            complete={completeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
