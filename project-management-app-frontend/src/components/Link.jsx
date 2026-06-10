export default function Link({ children, isSelected, onClick }) {
    // Dynamically apply highlight style classes based on selection flag
    let classes = "flex items-center w-full px-4 py-2.5 font-medium text-sm rounded-lg transition-all duration-200 text-left ";
    
    if (isSelected) {
        classes += "text-blue-100 bg-blue-900/80 shadow-inner";
    } else {
        classes += "text-slate-400 hover:text-blue-200 hover:bg-blue-900/40";
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
}