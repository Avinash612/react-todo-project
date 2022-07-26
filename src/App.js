import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import InputForm from "./components/TodoInput";
import Tabs from "./components/Filtertabs";
import Todo from "./components/Todolist";
import "./App.css";
/* eslint-disable */

const AllTask = "All";
const ActiveTask = "Active";
const CompletedTask = "Completed";
function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filteredActiveItems, setFilteredActiveItems] = useState(AllTask);
  {
    useEffect(() => {
      const listFrom = JSON.parse(localStorage.getItem("name"));
      if (listFrom?.length > 0) {
        setTasks(listFrom);
      }
    }, []);
    console.log(tasks, "tasks");
    useEffect(() => {
      localStorage.setItem("name", JSON.stringify(tasks));
    }, [tasks]);
  }

  const getFilteredTasks = () => {
    if (filteredActiveItems === AllTask) {
      return tasks;
    } else if (filteredActiveItems === CompletedTask) {
      const updatedTasks = tasks.filter((task) => {
        return task.completed === true;
      });
      return updatedTasks;
    } else if (filteredActiveItems === ActiveTask) {
      const activeTasks = tasks.filter((task) => {
        return task.completed === false;
      });
      return activeTasks;
    }
    return tasks;
  };

  const taskList = getFilteredTasks().map((task) => (
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
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
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
  //ALL TASKS......
  const handleAllListClick = () => {
    setFilteredActiveItems(AllTask);
  };
  // COMPLETED TASKS.....
  const handleCompletedListClick = () => {
    setFilteredActiveItems(CompletedTask);
  };

  //ACTIVE TASKS....

  const handleActiveListClick = () => {
    setFilteredActiveItems(ActiveTask);
  };

  return (
    <div className="head-container">
      <style>{"body { background-color: black; }"}</style>
      <h1 className="heading">Todo</h1>
      <InputForm handleAddButtonClick={addTask} />
      <br />
      <div>
        <Tabs
          onAllListClick={handleAllListClick}
          onCompletedListClick={handleCompletedListClick}
          onActiveListClick={handleActiveListClick}
        />
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
