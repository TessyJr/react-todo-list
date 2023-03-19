import React,  {useState} from 'react'
import './TodoList.css'
import { TodoInput } from './TodoForm'
import { TodoItem } from './TodoItem'

export const TodoForm = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddItem = (item) =>{
    setTodoList([...todoList, item])
  }

  const handleRemoveItem = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
}

  return (
    <div className='todo-wrapper' action="">
        <h1 className='todo-header'>Todo List</h1> 
        <TodoInput onAddItem={handleAddItem} />   

        {todoList.map((item, index)=>{
          return(<TodoItem key={index} index={index} item={item} onRemoveItem={handleRemoveItem} />);
        })}
        
    </div>
  )
}
