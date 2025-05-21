import { Children } from "react";

const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="text-black bg-white w-1/3 px-2 py-1 rounded-lg">
        {/* Header */}
        <div className="flex flex-row justify-between items-center my-3">
          <div></div>
          <h1 className="text-center text-lg font-bold">{title}</h1>
          <button
            onClick={onClose}
            className="font-xl bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg"
          >
            X
          </button>
        </div>

        {/* Body */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
