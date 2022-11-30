// Renders a single Todo Element
// msg - text of todo, id = id of todo, complete marks todo as complete
// remove function to remove todo, isComplete is a boolean for if todo is completed

const Todo = ({ msg, id, complete, remove, isComplete }) => {
  // delete a todo
  function handleRemove(e) {
    e.preventDefault();
    remove(e.target.parentElement);
    // complete or cancel completion of todo
  }
  function handleComplete(e) {
    e.preventDefault();
    complete(e.target.parentElement);
  }
  function handleEdit(e) {}
  // checks if todo is completed or not then renders todo appropriately
  if (!isComplete) {
    return (
      <div className="Todo" id={id}>
        <h4
          style={{ color: "orange", textDecoration: "none" }}
          onClick={handleComplete}
        >
          {msg}
        </h4>
        <button onClick={handleRemove}>X</button>
      </div>
    );
  } else {
    return (
      <div className="Todo" id={id}>
        <h4
          style={{ color: "green", textDecoration: "line-through" }}
          onClick={handleComplete}
        >
          {msg}
        </h4>
        <button onClick={handleRemove}>X</button>
      </div>
    );
  }
};
export default Todo;
