import React from "react";
//import TodoItem from './TodoItem';
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = React.useState([]);

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      status: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };


  const handleToggle = (id)=>{
    const todosAfterToggle = todos.map((todo)=>{
        return todo.id===id ? {...todo,status:!todo.status} : todo;
    });
    setTodos(todosAfterToggle);
  }


   const handleDelete = (id)=>{
    const todosAfterDelete = todos.filter(todo=>todo.id!=id);
    setTodos(todosAfterDelete);
   }
   
  return (
    <div>
      <div>
        <AddTodo handleAdd={handleAdd} />
      </div>
      <div>
        {todos.map((todo) => {
          return (
            <TodoItem status={todo.status} title={todo.title} id={todo.id}
            handleDelete={handleDelete}
             handleToggle={handleToggle}/>
          );
        })}
      </div>
    </div>
  );
}
