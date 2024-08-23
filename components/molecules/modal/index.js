import React from 'react';
import css from './modal.module.scss';

const ConfirmationModal = ({ isVisible, onConfirm, onCancel, message }) => {
  if (!isVisible) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h2>Confirmação</h2>
        <p>{message}</p>
        <div className={css.actions}>
          <button onClick={onConfirm}>Confirmar</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;