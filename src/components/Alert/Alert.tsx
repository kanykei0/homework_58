import React from "react";

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({ show, type, onDismiss, children }) => {
  {
    return (
      <div style={{ display: show ? "block" : "none" }}>
        <div className={`alert alert-${type} col-6 row`}>
          <div className="col">{children}</div>
          {onDismiss ? (
            <button className="btn-close col-1" onClick={onDismiss} />
          ) : null}
        </div>
      </div>
    );
  }
};

export default Alert;
