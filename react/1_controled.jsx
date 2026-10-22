import {useState} from "react";

function LoginForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />

    <input
    type="password"
    placeholder="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />

    <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;