export default function Welcome({onStartAddProject}) {
    return (
        <div className="flex-1 min-h-screen w-full bg-cover bg-center relative" 
             style={{ backgroundImage: "url('japanese-bg.png" }}>
            
            {/* Soft background text gradient shielding */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent"></div>

            {/* Content Core Wrapper */}
            <div className="relative z-10 flex h-full min-h-screen items-center justify-between p-16 w-full">
                
                {/* Left Text Column */}
                <div className="flex flex-col max-w-xl">
                    <span className="text-xs font-bold tracking-widest uppercase text-rose-700 mb-3 block">
                        Workspace Zen
                    </span>
                    <h1 className="text-5xl font-extrabold text-slate-800 tracking-tight leading-none mb-6">
                        Plan. <br />
                        Organize. <br />
                        <span className="text-rose-700">Achieve.</span>
                    </h1>
                    <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-sm">
                        Your projects, your team, your success. All in one beautifully organized place. Select a project from the sidebar or build a new foundation.
                    </p>
                    <div>
                        <button className="px-6 py-3 bg-blue-950 text-slate-100 font-medium text-sm rounded-lg shadow-lg hover:bg-rose-800 transition-all duration-300 hover:scale-[1.02]" onClick={onStartAddProject}>
                            Create New Project
                        </button>
                    </div>
                </div>

                {/* Right Editorial Vertical Accent Line */}
                <div className="hidden lg:flex flex-col items-center border-l border-slate-300/60 pl-8 h-64 justify-center space-y-4">
                    <span className="[writing-mode:vertical-rl] tracking-[0.3em] font-medium text-slate-400 uppercase text-xs">
                        YUGEN WORKSPACE
                    </span>
                    <div className="w-1 h-12 bg-rose-700/70 rounded-full"></div>
                </div>

            </div>
        </div>
    );
}