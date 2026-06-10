import Tasks from "./Tasks.jsx";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask , tasks}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="flex-1 min-h-screen bg-slate-50 w-full animate-in fade-in duration-200">
            <main className="p-10 max-w-4xl w-full">
                
                {/* Project Header Wrapper */}
                <header className="border-b border-slate-200 pb-5 mb-6">
                    <div className="flex items-center justify-between mb-2">
                        {/* Title Display */}
                        <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
                            {project.title}
                        </h1>
                        {/* Delete Action Button */}
                        <button className="px-4 py-2 text-sm font-semibold text-rose-600 rounded-lg hover:bg-rose-50 hover:text-rose-700 transition-colors duration-200 focus:outline-none" onClick={onDelete}>
                            Delete
                        </button>
                    </div>
                    
                    {/* Clean formatted calendar target */}
                    <p className="text-sm font-medium text-slate-400 mb-4">
                        {formattedDate}
                    </p>
                    
                    {/* Project Description Block */}
                    <p className="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">
                        {project.desc}
                    </p>
                </header>

                {/* Tasks Workflow Management Section Anchor */}
                <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
            </main>
        </div>
    );
}