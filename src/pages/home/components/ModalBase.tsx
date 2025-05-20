import React from 'react';
import { Portal } from 'react-portal';

interface ModalBaseProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalBase = ({ onClose, children }: ModalBaseProps) => {
  const node = document.getElementById('portal-root');
  if (!node) return null;

  return (
    <Portal node={node}>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
        <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff' }}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default ModalBase;
