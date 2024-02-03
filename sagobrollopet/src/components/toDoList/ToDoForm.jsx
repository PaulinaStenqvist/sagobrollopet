import React, {useState} from 'react'

export const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add toDo
          addToDo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="ToDoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="toDo-input" placeholder='What is the task today?' />
    <button type="submit" className='toDo-btn'>Add Task</button>
  </form>
  )
}