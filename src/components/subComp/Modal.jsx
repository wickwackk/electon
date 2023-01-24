import "../../styles/modal.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Electon from "../imageComp/Electon";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  function showModal() {
    setIsOpen(true);
  }

  function hideModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={showModal}>Sign in</button>
      <Modal
        dialogClassName="custom-dialog"
        className="modal"
        show={isOpen}
        onHide={hideModal}
      >
        <Modal.Header>
          <Modal.Title className="modalTitle">
            <Electon dialogClassName="Electon" color={"#003585"} />
            <button className="hideButton" onClick={hideModal}>
              x
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <input
            type="number email"
            placeholder="И-мэйл эсвэл Утасны дугаар"
            name="user"
          />
          <input type="password" placeholder="Нууц үг" name="password" />
        </Modal.Body>
        <Modal.Footer>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
