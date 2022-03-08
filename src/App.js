
import './App.css';
import React, {useState} from "react";
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  const [ toDoList, setToDoList] = useState(data);
  return (
    <div className="App">
      <Header />  
    </div>
  );
}

export default App;
