import { NewTasks } from "./NewTask";

export default function Tasks({ onAdd, onDelete, tasks = [] }) {
    return (
        <section className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                Tasks
            </h2>
            
            <NewTasks onAdd={onAdd} />
            
            {/* Empty State View */}
            {tasks.length === 0 && (
                <p className="text-sm text-slate-400 italic">
                    No tasks created for this project yet.
                </p>
            )}
            
            {/* Active Tasks List Container */}
            {tasks.length !== 0 && (
                <ul className="max-w-2xl w-full bg-white border border-slate-200/60 rounded-xl shadow-sm divide-y divide-slate-100 overflow-hidden">
                    {tasks.map(task => (
                        <li 
                            key={task.id} 
                            className="flex items-center justify-between px-5 py-3.5 text-sm text-slate-700 hover:bg-slate-50/80 transition-colors group animate-in fade-in slide-in-from-left-5 duration-300 ease-out"
                        >
                            {/* Overflow Shield: min-w-0 and flex-1 force the layout to contain text bounds */}
                            <div className="min-w-0 flex-1 pr-4">
                                <p className="font-medium text-slate-700 break-all whitespace-normal">
                                    {task.text}
                                </p>
                            </div>
                            
                            {/* Actions Control: shrink-0 keeps the button shape locked and solid */}
                            <button 
                                onClick={() => onDelete(task.id)} 
                                className="text-xs font-semibold text-slate-500 hover:text-rose-700 opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none shrink-0"
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}