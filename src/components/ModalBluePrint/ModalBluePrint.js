import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { setClose } from "../../Slicers/modalSlicer";

const ModalBluePrint = ({ isOpen, modalType, header }) => {
  const [content, setContent] = useState([]);
  const dispatchModal = useDispatch();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="modal__Blue__print">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => dispatchModal(setClose())}
        style={customStyles}
      >
        {modalType}
      </Modal>
    </div>
  );
};

export default ModalBluePrint;
