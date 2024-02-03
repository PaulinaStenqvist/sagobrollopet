import React, {useState} from 'react'

export const EditToDoForm = ({editToDo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit toDo
        editToDo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="ToDoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="toDo-input" placeholder='Update task' />
    <button type="submit" className='toDo-btn'>Add Task</button>
  </form>
  )
}