import React from "react";
import "./Modal.scss";
import { GrFormClose } from "react-icons/gr";

const Modal = ({ children, setShow }) => {
  return (
    <>
      <div className="modal-shop">
        <div className="modal-wraper-shop">
          <div className="modal-popup-shop">
            <div className="modal-header-shop">
              <button onClick={() => setShow(false)}>
                <GrFormClose />
              </button>
            </div>
            <div className="modal-body-shop">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
