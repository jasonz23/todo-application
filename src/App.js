
import './App.css';
import React, {useState} from "react";
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const [ toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id? { ...task, complete: !toHaveStyle.complete}: {...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  return (
    <div className="App">
      <Header />  
      <ToDoList toDoList={toDoList} handleFilter = {handleFilter} handleToggle = {handleToggle} />
    </div>
  );
}

export default App;
