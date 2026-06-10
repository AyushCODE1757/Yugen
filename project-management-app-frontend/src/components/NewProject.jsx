import Input from "./Input.jsx"
export default function NewProject(){
    return(
        <div className="flex min-h-screen bg-slate-50">
            <main className="flex-1 p-10">
                <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-8 w-full max-w-4xl">
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Create New Project</h1>
                    <menu className="flex items-center gap-3">  
                        <li className="list-none">
                            <button className="px-4 py-2 text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">Cancel</button>
                        </li> 
                        <li className="list-none">
                            <button className="px-4 py-2 bg-blue-950 text-slate-100 rounded-lg text-sm font-medium hover:bg-blue-800 shadow-sm transition-all"
                            >Save</button>
                        </li> 
                    </menu>
                </div>
               
                <div className="max-w-4xl w-full"> 
                    <Input label="Title" type="text" placeholder="Enter Project Name....."/>
                    <Input label="Description" textArea rows="5" placeholder="What is this project?"/>
                    <Input label="DueDate" type="date"/>
                </div>     
            </main>
            
        </div>
    )
}