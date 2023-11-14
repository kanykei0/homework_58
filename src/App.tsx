import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [success, setSuccess] = useState(true);
  const [danger, setDanger] = useState(true);
  const [warning, setWarning] = useState(false);

  const continueBtn = () => {
    setShowModal(false);
    setShowModalMessage(true);
  };

  const openModalMessage = () => {
    return (
      <Modal
        show={true}
        title="Alert head!"
        onClose={() => setShowModalMessage(false)}
      >
        <div className="modal-body">Hello World!</div>
      </Modal>
    );
  };

  const cancelBtn = () => {
    setShowModal(false);
  };

  const modalButtons = [
    { type: "primary", label: "Continue", onClick: continueBtn },
    { type: "danger", label: "Close", onClick: cancelBtn },
  ];

  return (
    <>
      <div className="container-md">
        <button
          className="btn btn-success my-3"
          onClick={() => setShowModal(true)}
        >
          Modal
        </button>
        <Modal
          show={showModal}
          title="Modal head!"
          onClose={() => setShowModal(false)}
          buttons={modalButtons}
        >
          <div className="modal-body">Content</div>
        </Modal>
        {showModalMessage ? openModalMessage() : null}
        <Alert
          show={success}
          type="success"
          onDismiss={() => setSuccess(false)}
        >
          Hello World!
        </Alert>

        <Alert
          show={danger}
          type="danger"
          clickDismissable
          onDismiss={() => setDanger(false)}
        >
          Bye World!
        </Alert>
        <button
          className="btn btn-primary mb-3 d-block"
          onClick={() => setWarning(!warning)}
        >
          {warning ? "Hide warning alert" : "Show warning alert"}
        </button>
        <Alert show={warning} type="warning">
          Bye World!
        </Alert>
      </div>
    </>
  );
}

export default App;
