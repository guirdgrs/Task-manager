import { Accessibility, ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    return (
        // For each task will be rendered a paragraph
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
            {/* When working with a function by props you use this sintax to pass the id */}
            <button onClick={() => onTaskClick(task.id)} 
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
            // Using JS in the class as a condition to add a class if the condition is true
            ${task.isCompleted && "line-through"}`}>
                {task.title}
                </button>
            <button className="bg-slate-400 p-2 rounded-md text-white"><ChevronRightIcon/></button>
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