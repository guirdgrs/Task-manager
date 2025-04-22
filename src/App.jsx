import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import { use } from "react";
import Title from "./components/Title";

function App(){

  // Creating the list state of the task list
  const [tasks, setTasks] = useState( // Getting the tasks from local storage or setting it to an empty array
    JSON.parse(localStorage.getItem("tasks")) || []
  );


  // useEffect is used to run a function when the component is mounted
  useEffect (() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) // Setting the tasks in local storage
  }, [tasks]); // The function will run when the tasks state changes


  // Learning about API's
  useEffect(() => {
    // Using async function to fetch data from the API
    async function fetchTasks() {
          // Calling the API
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10",
      {method: "GET"}); 
      
    // The method is GET, so we are getting the data from the API
    const data = await response.json();

    setTasks(data);
    }
    // fetchTasks(); // Calling the function
   }, []); // This is an empty array, so the function will only run once when the component is mounted

// Function to change the state of the button
function onTaskClick(taskId){
  const newTasks = tasks.map(tasks =>{

    // Needs to update the task
    if(tasks.id === taskId){
      return {...tasks, isCompleted: !tasks.isCompleted}
    }

    // Doesn't need to update the task
    return tasks;
  })
  // Updating the state to the new task list that has the isCompleted parameter changed
  setTasks(newTasks);
}

  // Function to add a task to the state
  function onAddTaskSubmit (title, description){ // => Obtaining the values from the inputs
    const newTask = {
      id: v4(), //Using uuid to generate a random ID
      title,
      description,
      isCompleted: false,
    };
  setTasks([...tasks, newTask]); //Setting the task and inserting the value on the list
  }

// Function to delete the task
  function onDeleteTaskClick(taskId){
    // Filtering the tasks by the id
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
      <Title>Task Manager</Title>
      <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
      {/* Sending the tasks to the props*/}
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      {/* You can also pass a function with prop (onTaskClick is a function) */}
      </div>
    </div>
  );
}

export default App;