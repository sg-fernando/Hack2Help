import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const port = 3001;
const app = express();

// Path to the todos.json file
const TODOS_FILE_PATH = './storage/todos.json';
// Read the todos from the file system
const todos = JSON.parse(fs.readFileSync(TODOS_FILE_PATH));

// Use the JSON parsing middleware so we can access it via `req.body`
app.use(express.json());

// create todos router
const todosRouter = express.Router();
// attach todos router to app
app.use('/todos', todosRouter);

// get all todos
todosRouter.get('/', (req, res) => {
    // json and send similar but send is more flexible
    res.json(todos);
});

// get a todo by id
todosRouter.get('/:todoId', (req, res) => {
    // find the todo with the id that matches the id in the url
    let todo = todos.find((_todo) => _todo.id === req.params.todoId);
    if (!todo) {
        res.status(404).send("todo not found");
    }
    else {
        res.json(todo);
    }
});

// POST a new todo
todosRouter.post('/', (req, res) => {
    let newTodo = { id: uuidv4(), ...req.body };
    todos.push(newTodo);
    fs.writeFileSync(TODOS_FILE_PATH, JSON.stringify(todos));
    res.json(newTodo);
});

// PUT update a todo by ID
todosRouter.put('/:todoId', (req, res) => {
    let todoIndex = todos.findIndex(_todo => _todo.id === req.params.todoId);
    if (todoIndex === -1) {
        res.status(404).send("todo not found");
    } else {
        todos[todoIndex] = { id:todos[todoIndex].id, ...req.body };
        fs.writeFileSync(TODOS_FILE_PATH, JSON.stringify(todos));
        res.json(todos[todoIndex]);
    }
});

// DELETE a todo by ID
todosRouter.delete('/:todoId', (req, res) => {
    const todoIndex = todos.findIndex(_todo => _todo.id === req.params.todoId);
    if (todoIndex === -1) {
        res.status(404).json({ error: 'Todo not found' });
    } else {
        todos.splice(todoIndex, 1);
        fs.writeFileSync(TODOS_FILE_PATH, JSON.stringify(todos));
        res.status(204).end();
    }
});


app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
})
