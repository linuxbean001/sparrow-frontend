import React, { useState } from 'react';
import classNames from 'classnames';
import ReactModal from 'react-modal';

import '../../components/modals/modal.css';
import { ReactComponent as ModalClose } from '../../components/modals/images/icon-close.svg';

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(49, 52, 86, 0.8)',
    zIndex: 100,
  },
};

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const Modal = ({ children, className, modalName }) => {
    const classes = classNames('Modal', className);
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleModalClose}
        contentLabel={modalName}
        style={styles}
        className={classes}
      >
        <div className="Modal__wrapper">
          <div
            className="Modal__closeButton"
            onClick={handleModalClose}
            onKeyDown={event => event.key === 'Enter' && handleModalClose}
            role="button"
            tabIndex="0"
          >
            <ModalClose />
          </div>
          {children}
        </div>
      </ReactModal>
    );
  };

  return { handleModalOpen, handleModalClose, Modal };
};

export default useModal;
