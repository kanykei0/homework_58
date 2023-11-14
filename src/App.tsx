import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const continueBtn = () => {
    setShowModal(false);
    setShowModalMessage(true);
  };

  const openAlert = () => {
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
      <button className="btn btn-success" onClick={() => setShowModal(true)}>
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
      {showModalMessage ? openAlert() : null}
      <Alert
        show={showAlert}
        type="success"
        onDismiss={() => setShowAlert(false)}
      >
        Hello World!
      </Alert>

      <Alert show={true} type="danger">
        Bye World!
      </Alert>
    </>
  );
}

export default App;
