import React from 'react';

const Modal = ({ isOpen, onClose, children, hideCloseButton = false }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 shadow-lg flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-[25%] rounded-lg relative">
                {!hideCloseButton && (
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                )}
                {children}
            </div>
        </div>
    );
};

export default Modal;
