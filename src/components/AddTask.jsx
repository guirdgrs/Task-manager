import { useState } from "react";
import Input from "./Input.jsx";

function AddTask({onAddTaskSubmit}){

    // Creating states to obtain the values
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
            type="text" placeholder="Type the task..." 
            //Setting the value to the state one
            value={title}
            // Using event changer from JS to grab the value change
            onChange={(event)=> setTitle(event.target.value)}/> 

            <Input
            type="text" placeholder="Type the task description..." 
            value={description}
            onChange={(event)=> setDescription(event.target.value)}/> 
            
            <button onClick={() => {
                // Verify if the inputs != null
                if(!title.trim() || !description.trim()){
                    return alert("You need to type the task and it description")
                }
                onAddTaskSubmit(title,description);
                // Setting the inputs to blank right after adding a new task
                setTitle("");
                setDescription("");
            }}
            className="bg-green-600 text-white px-4 p-y rounded-md font-medium">
            Add</button>
        </div>
    );
}

export default AddTask;