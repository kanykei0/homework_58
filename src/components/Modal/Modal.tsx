import React from "react";
import Backdrop from "../Backdrop/Backdrop";

interface Button {
  type: string;
  label: string;
  onClick: () => void;
}

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons?: Button[];
}

const Modal: React.FC<Props> = ({
  show,
  title,
  onClose,
  buttons,
  children,
}) => {
  return (
    <>
      <Backdrop show={show} />
      <div className="modal show" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            {children}
            <div className="modal-footer">
              {buttons
                ? buttons.map((button, index) => (
                    <button
                      key={index}
                      onClick={button.onClick}
                      className={`btn btn-${button.type}`}
                    >
                      {button.label}
                    </button>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
