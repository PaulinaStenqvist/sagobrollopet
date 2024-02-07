import React, { useState } from "react";
import { ToDo } from "./ToDo";
import { ToDoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { EditToDoForm } from "./EditToDoForm";

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos([
      ...toDos,
      { id: uuidv4(), task: toDo, completed: false, isEditing: false },
    ]);
  }

  const deleteToDo = (id) => setToDos(toDos.filter((toDo) => toDo.id !== id));

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  }

  const editToDo = (id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, isEditing: !toDo.isEditing } : toDo
      )
    );
  }

  const editTask = (task, id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, task, isEditing: !toDo.isEditing } : toDo
      )
    );
  };

  return (
    <div className="ToDoWrapper">
      <h1>Att Göra Lista</h1>
      <ToDoForm addToDo={addToDo} />
      {/* display todos */}
      {toDos.map((toDo) =>
        toDo.isEditing ? (
          <EditToDoForm editToDo={editTask} task={toDo} />
        ) : (
          <ToDo
            key={toDo.id}
            task={toDo}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};