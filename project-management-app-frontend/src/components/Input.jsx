export default function Input({textArea, label, ...props}){
    const shapeBorder = "w-full p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm";
    const focusStateRing = "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all";
    return (
        
        <p className="flex flex-col gap-1.5 mb-5">
            <label className="text-xs font-bold uppercase tracking-wide text-slate-600">{label}</label>
            {textArea ? <textarea className={`${shapeBorder} ${focusStateRing}`} {...props}/> : <input className={`${shapeBorder} ${focusStateRing}`} {...props}/>}
        </p>
    )
}