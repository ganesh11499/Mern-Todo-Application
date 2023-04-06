import express from 'express'
import { UpdateTodo, addTodo, deleteTodo, getAllTodos, toggleTodoDone } from '../controllers/todoController.js';



const route = express.Router();

route.post('/todos', addTodo)
route.get('/todos', getAllTodos)
route.get('/todos/:id', toggleTodoDone)
route.put('/todos/:id', UpdateTodo)
route.delete('/todos/:id', deleteTodo)

export default route;