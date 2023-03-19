import React, {useState} from 'react'

export const TodoInput = ({onAddItem}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (event) =>{
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    onAddItem(inputValue);
    setInputValue('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input className='todo-input' type="text" placeholder='What to do today?' value={inputValue} onChange={handleInputValue} />
        <button type='submit' className='todo-submit'>Add Task</button>
    </form>
  )
}
