import { Accessibility, CheckIcon, ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import {useNavigate} from "react-router-dom";
import Button from "./Button";

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
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md flex items-center gap-2
            // Using JS in the class as a condition to add a class if the condition is true
            ${task.isCompleted && "line-through"}`}>
                {/* Icon to show if the task is completed or not using ternary comparation */}
                {task.isCompleted && <CheckIcon className="inline-block mr-2"/>}
                {task.title}
                </button>

            {/* Button to see details */}
            <Button onClick={() => onSeeDetailsClick(task)} >
                <ChevronRightIcon/></Button>

            {/* Button to delete the task */}
            <Button onClick={()=> onDeleteTaskClick(task.id)}>
                <TrashIcon/>
                </Button>
        </li>
    ))}
    </ul>
    );
}

export default Tasks;