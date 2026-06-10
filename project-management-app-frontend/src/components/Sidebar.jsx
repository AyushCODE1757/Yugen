import Link from "./Link.jsx";
export default function Sidebar({onStartAddProject}){
    return( 
    <div className="flex flex-col w-64 h-screen justify-between bg-blue-950 border-b-cyan-900 border-r border-slate-900">
        <div className="flex items-center p-4">
            <img className="w-10 h-10" src="/logo.png" alt="logo"/>
            <h2 className="text-slate-100 text-xl font-bold  ml-3">Yugen </h2>
        </div>
        <div className="flex justify-between px-4 mb-4">
            <button className="w-full p-3 bg-slate-300 rounded-lg font-medium text-blue-900 transition-all duration-300 hover:ring-4 hover:ring-emerald-400/40 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg shdow-md hover:bg-red-100" onClick={onStartAddProject}>+Add Project</button>
        </div>
        <nav className="flex-1 overflow-y-auto">
            <Link>Project1</Link>
            <Link>Project2</Link>
            <Link>Project3</Link>
        </nav>
        <div className="border-t border-blue-900 p-3">
            <div className="flex items-center">
                <img className="h-9 w-9 rounded-full object-cover" src="/gojo.png"></img>
                <div>
                    <p className="text-sm font-semibold text-slate-200 ml-3">User</p>
                    <p className="text-xs text-slate-500">example@xyz.com</p>
                </div>
            </div>
        </div>
    </div>
    );
}