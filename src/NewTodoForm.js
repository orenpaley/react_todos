import React, { useState } from "react";
import { v4 as uuid } from "uuid";
// creates an input controlled by react to add text and create new todo
const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    msg: "write a new task",
    isComplete: false,
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("formdataB4", formData);
    console.log("name, value", name, value);

    setFormData(() => ({
      // maintains state of other data that is not being changed
      ...formData,
      // changes state of the value of name -> msg
      [name]: value,
    }));
    console.log("formdataAFter", formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData, key: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="msg">Task</label>
      <input
        id="msg"
        type="text"
        name="msg"
        placeholder="write a new task"
        value={formData.msg}
        onChange={handleChange}
      />
      <button>+</button>
    </form>
  );
};

export default NewTodoForm;
