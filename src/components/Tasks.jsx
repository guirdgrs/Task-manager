import { Accessibility, ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import {useNavigate} from "react-router-dom";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){

    const navigate = useNavigate();

    function onSeeDetailsClick(task){
        // Using URLSearchParams to create a query string
        const query = new URLSearchParams();

        // Setting the title and description as query parameters
        query.set("title", task.title);
        query.set("description", task.description);
        
        // Using the navigate function to go to the task page
        navigate(`/task?${query.toString()}`);
    }
    return (
        // For each task will be rendered a paragraph
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">

            {/* When working with a function by props you use this sintax to pass the id */}
            {/* Button to risk the task */}
            <button onClick={() => onTaskClick(task.id)} 
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
            // Using JS in the class as a condition to add a class if the condition is true
            ${task.isCompleted && "line-through"}`}>
                {task.title}
                </button>

            {/* Button to see details */}
            <button onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white">
                <ChevronRightIcon/></button>

            {/* Button to delete the task */}
            <button onClick={()=> onDeleteTaskClick(task.id)}
            className="bg-red-400 p-2 rounded-md text-white">
                <TrashIcon/>
                </button>
        </li>
    ))}
    </ul>
    );
}

export default Tasks;