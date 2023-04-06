
import Todo from "../models/todoModel.js"



export const addTodo = async(request, response) => {
   try {
    const newTodo = await Todo.create({
        data:request.body.data,
        createdAT:Date.now()
    });

     response.status(200).json(newTodo)

    
   } catch (error) {
    return response.status(500).json(error.message );
   }
}

export const getAllTodos = async(request,response) =>{

try {
  const todos = await Todo.find({}).sort({'createdAT':-1});

  return response.status(200).json(todos);
  
} catch (error) {
  
  return response.status(500).json(error.message)
}
}


export const toggleTodoDone = async(request, response) => {
  try {

    const todoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findByIdAndUpdate(
      {_id:request.params.id},
      { done: !todoRef.done }
    )
    
    await todo.save();
    return response.status(200).json(todo);

  } catch (error) {
    return response.status(500).json(error.message)
  }
}

export const  UpdateTodo = async (request, responce) => {
  try {

       await Todo.findOneAndUpdate(
      {_id:request.params.id},
      { data: request.body.data}
      )
    
     const todo = await Todo.findById(request.params.id)

      return responce.status(200).json(todo)

  } catch (error) {
    return responce.status(500).json(error.message)
  }
}

export const  deleteTodo = async (request, responce) => {
  try {

    const todo = await Todo.findByIdAndDelete(request.params.id)

      return responce.status(200).json(todo)

  } catch (error) {
    return responce.status(500).json(error.message)
  }
}