import React, { useState, useEffect } from "react";
import InputForm from "./components/TodoInput";
import Tabs from "./components/Filtertabs";
import Todo from "./components/Todolist";
import { nanoid } from "nanoid";
import "./App.css";
/* eslint-disable */
function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  useEffect(() => {
    const listFrom = localStorage.getItem("name");
    if (listFrom?.length > 0) {
      setTasks(listFrom);
    }
  }, []);

  console.log(tasks, "tasks");
  useEffect(() => {
    window.localStorage.setItem("name", tasks);
  }, [tasks]);

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  function addTask(name) {
    const newTask = { id: "todo" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  return (
    <div className="head-container">
      <style>{"body { background-color: black; }"}</style>
      <h1 className="heading">Todo</h1>
      <InputForm options={taskList} handleAddButtonClick={addTask} />
      <br />
      <div>
        <Tabs />
      </div>
      <div>
        <ul role="list" className="unorderedlists">
          {taskList}
        </ul>
      </div>
    </div>
  );
}
export default App;
