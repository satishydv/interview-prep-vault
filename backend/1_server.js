import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
// to parse incoming requests with JSON payloads
app.use(express.json());

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  },

    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com"
    }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1; // Assign a new ID
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users[userIndex] = { ...users[userIndex], ...updatedUser };
  res.json(users[userIndex]);
});


app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});