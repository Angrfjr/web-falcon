import React from "react";
import "./styles.css";

function Modal({ isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="img-container">
          <a
            href="https://form.fitnessworks.co.id/99k"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/image/home/promo_99.png"
              alt="Popup"
              className="modal-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
