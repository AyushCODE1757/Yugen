import { useState } from "react"

export function NewTasks({onAdd}){
    const [enteredTask, setEnteredTask] = useState('');
    function handleChange(event){
        setEnteredTask(event.target.value);
    }
    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask);
       setEnteredTask(''); 
    }
    return <div className="flex items-center gap-4 max-w-xl w-full mb-6 animate-in fade-in duration-200">
        <input type="text"
        className="flex-1 px-4 py-2 bg-slate-200 border border-slate-400 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-200/30 focus:border-blue-950 transition-all"
        placeholder="Add a milestone objective..." 
        onChange={handleChange}
        value={enteredTask}/>
        <button onClick={handleClick} className="px-4 py-2 bg-slate-900 text-slate-100 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm focus:outline-none">Add Task</button>
    </div>
}