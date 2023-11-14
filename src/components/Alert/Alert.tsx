import React from "react";

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: React.MouseEventHandler;
  clickDismissable?: boolean;
}

const Alert: React.FC<Props> = ({
  show,
  type,
  onDismiss,
  clickDismissable,
  children,
}) => {
  {
    return (
      <div
        style={{ display: show ? "block" : "none" }}
        onClick={clickDismissable ? onDismiss : undefined}
      >
        <div className={`alert alert-${type} col-6 row`}>
          <div className="col">{children}</div>
          {onDismiss && !clickDismissable ? (
            <button className="btn-close col-1" onClick={onDismiss} />
          ) : null}
        </div>
      </div>
    );
  }
};

export default Alert;
