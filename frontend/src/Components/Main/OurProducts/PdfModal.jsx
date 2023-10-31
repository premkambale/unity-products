import React from 'react';
import Modal from 'react-modal';
import './PdfMoldal.css';

Modal.setAppElement('#root');

const PdfModal = ({ isOpen, closeModal, pdfUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="PDF Modal"
    >
      <button onClick={closeModal} className="close-modal-button">
        Close
      </button>
      <iframe
        title="PDF Viewer"
        className="pdf-iframe"
        src={pdfUrl}
        width="100%"
        height="100%"
      />
    </Modal>
  );
};

export default PdfModal;
