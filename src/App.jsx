import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";
import { v4 } from "uuid";

function App(){

  // Creating the list state of the task list
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Study",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isCompleted: false,
  },

  {
    id: 2,
    title: "Read",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isCompleted: false,
  },

  {
    id: 3,
    title: "Practice",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isCompleted: false,
  }
]);

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
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Task Manager
        </h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
      {/* Sending the tasks to the props*/}
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      {/* You can also pass a function with prop (onTaskClick is a function) */}
      </div>
    </div>
  );
}

export default App;