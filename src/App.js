
import './App.css';
import React, {useState} from "react";
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
//import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import ToDoForm from './ToDoForm';

function App() {
  const [ toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete}: {...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

   const addTask = (userInput) => {
   let copy = [...toDoList];
   copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
   setToDoList(copy);
 }

  return (
    <div className="App">
      <Header />  
      <ToDoForm addTask = {addTask} />
      <ToDoList toDoList={toDoList} handleFilter = {handleFilter} handleToggle = {handleToggle} />
      
    </div>
  );
}
// const handleFilter = () => {
//   let f = toDoList.filter(task => {
//     return !task.complete;
//   });
//   setToDoList(f);

// }

//     return (
//       <div>
        
//         <h3>
//           {data.map((toDoList, key) => {
//             return <p key = {toDoList.id} className = {toDoList.complete? "todo strike" : "todo"} >
//               {toDoList.task}
//               </p>
//           })}
//         </h3>
//         <button onClick = {handleFilter}>
//         remove Task
//         </button>
//       </div>
      

//     )
// }

export default App;
