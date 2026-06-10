import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialogRef = useRef();
    
    useImperativeHandle(ref, () => {
        return {
            open() {
                if (dialogRef.current) {
                    dialogRef.current.showModal();
                }
            }
        };
    });

    return createPortal(
        <dialog 
            ref={dialogRef} 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-white shadow-2xl rounded-2xl p-7 my-0 mx-auto focus:outline-none backdrop:bg-slate-900/60 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0 open:zoom-in-95 duration-200 ease-out"
        >
            <div className="flex flex-col space-y-4">
                
                {/* Status Accent Header Tag */}
                <span className="text-xs font-bold tracking-widest text-rose-600 uppercase block border-b border-slate-100 pb-2">
                    Attention Required
                </span>

                {/* Content Body Area */}
                <div className="space-y-2 text-slate-800 font-medium">
                    {children}
                </div>
                
                {/* Action Form Button Dismiss */}
                <form method="dialog" className="flex justify-end pt-2">
                    <button className="px-5 py-2 bg-blue-950 text-slate-100 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-900 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus:outline-none">
                        {buttonCaption}
                    </button>
                </form>

            </div>
        </dialog>, 
        document.getElementById('modal-root')
    );
});

export default Modal;