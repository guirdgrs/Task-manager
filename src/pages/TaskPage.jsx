import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function TaskPage(){

    const navigate = useNavigate();

    // Using useSearchParams to get the search parameters from the URL
    const [searchParams] = useSearchParams();

    // Getting the title and description from the search parameters
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    return ( 
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
        <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative mb-6">
                <button onClick={()=> navigate(-1)} 
                className="absolute left-0 top-8 bottom-0 text-slate-100">
                    <ChevronLeftIcon/>
                </button>
            </div>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
                Details of the task
            </h1>

        <div className="bg-slate-200 p-4 rounded-md">
            <h2 className="text-xl font-bold text-slate-600 text-center">{title}</h2>
            <p className="text-slate-600 text-center">{description}</p>
        </div>
        </div>
    </div>
    );
}

export default TaskPage;