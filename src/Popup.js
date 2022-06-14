import React, { useRef } from "react";
import ReactDom from "react-dom";

export const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>Light Site</h2>
        <br />
        <br />
        <p>
          This website can be used to illuminate your immediate enviroment using
          your screen, with the color of your choosing! Made by{" "}
          <a
            href="https://davon-whitworth.com/"
            target="_blank"
            rel="noreferrer"
          >
            Davon Whitworth
          </a>
        </p>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
