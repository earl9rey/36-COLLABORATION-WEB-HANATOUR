import React from 'react';

interface ModalBaseProps {
  onClose: () => void;
  children: React.ReactNode;
  wrapperClassName?: string;
}

const ModalBase = ({ onClose, children, wrapperClassName = '' }: ModalBaseProps) => {
  return (
    <div onClick={onClose} className={`absolute w-full bg-transparent ${wrapperClassName}`}>
      <div onClick={(e) => e.stopPropagation()} className="bg-transparent">
        {children}
      </div>
    </div>
  );
};

export default ModalBase;
