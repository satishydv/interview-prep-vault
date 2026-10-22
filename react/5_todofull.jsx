import {useState} from "react";

function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  }

  //Delete todos
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
    <h1>Todo List</h1>
    <input
    type="text"
    placeholder="Add a new todo"
    value={input}
    onChange={(e) => setInput(e.target.value)} />

    <button onClick={addTodo}>Add Todo</button>

    <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
      <span 
      onClick={() => toggleTodo(todo.id)}
      style={{textDecoration: todo.completed ? "line-through" : "none"}}>
      {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    ))}
    </ul>
    </div>
  );
}

export default TodoApp;