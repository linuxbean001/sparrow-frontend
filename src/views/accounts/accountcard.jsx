import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import iconSocialFacebook from './images/icon-social-facebook.svg';
import iconSocialTwitter from './images/icon-social-twitter.svg';
import iconSocialInstagram from './images/icon-social-instagram.svg';
import iconOptions from './images/icon-options.svg';
import useModal from '../../hooks/components/modal';
import ActionModal from '../../components/modals/action';
import AddClientView from './addclient';

const optionsToolTip = React.createRef();
const socialAccountToolTip = React.createRef();

const AccountCard = ({ account }) => {
  const [modalType, setModalType] = useState(0);
  const { handleModalOpen, handleModalClose, Modal } = useModal();

  function socialIconMouseOut() {
    socialAccountToolTip.current.classList.add('hidden');
  }
  // @todo would be better to define it as classes and apply the class to the element
  function socialIconMouseOver(event) {
    socialAccountToolTip.current.style.left = `${event.target.offsetLeft -
      82}px`;
    socialAccountToolTip.current.style.top = `${event.target.offsetTop + 34}px`;
    socialAccountToolTip.current.classList.remove('hidden');
  }

  return (
    <>
      <Modal showModal={handleModalOpen} onClose={handleModalClose}>
        {modalType === 'remove_client' ? (
          <ActionModal
            question="Are you sure you want to remove Acme Inc.?"
            primaryButtonCaption="Remove Client"
            secondaryButtonCaption="Keep Client"
            onResult={Result => {
              if (Result === 'secondary') {
                handleModalClose();
              }
            }}
          />
        ) : null}
        {modalType === 'remove_account' ? (
          <ActionModal
            question="Are you sure you want to disconnect Facebook?"
            primaryButtonCaption="Disconnect"
            secondaryButtonCaption="Cancel"
            onResult={Result => {
              if (Result === 'secondary') {
                handleModalClose();
              }
            }}
          />
        ) : null}
        {modalType === 'edit_client' ? <AddClientView edit /> : null}
      </Modal>
      <div className="account-card">
        <div className="account-details">
          <div className="account-icon" />
          <div className="account-title">{account.client_name}</div>
          <div className="account-subtitle">3 Accounts Connected</div>
        </div>
        <button
          type="button"
          onClick={() => {
            optionsToolTip.current.classList.toggle('hidden');
          }}
          className="account-options"
        >
          <img src={iconOptions} alt="" />
        </button>
        <div ref={optionsToolTip} className="account-options-tooltip hidden">
          <div className="tooltipthingy" />
          <div className="tooltiptext" />
          <Link
            to="/settings"
            onClick={event => {
              event.preventDefault();
              setModalType('edit_client');
              handleModalOpen();
              optionsToolTip.current.classList.toggle('hidden');
            }}
          >
            Edit details
          </Link>
          <Link
            to="/profile"
            onClick={event => {
              event.preventDefault();
              setModalType('remove_client');
              handleModalOpen();
              optionsToolTip.current.classList.toggle('hidden');
            }}
          >
            Remove
          </Link>
        </div>
        <hr />
        <div className="social-icons">
          <button
            type="button"
            className="social-icon"
            aria-label="Facebook Icon"
            onMouseOut={socialIconMouseOut}
            onBlur={socialIconMouseOut}
            onMouseOver={socialIconMouseOver}
            onFocus={socialIconMouseOver}
          >
            <img src={iconSocialFacebook} alt="Facebook" />
          </button>
          <button
            type="button"
            className="social-icon"
            aria-label="Twitter Icon"
            onMouseOut={socialIconMouseOut}
            onBlur={socialIconMouseOut}
            onMouseOver={socialIconMouseOver}
            onFocus={socialIconMouseOver}
          >
            <img src={iconSocialTwitter} alt="Twitter" />
          </button>
          <button
            type="button"
            className="social-icon"
            aria-label="Instagram Icon"
            onMouseOut={socialIconMouseOut}
            onBlur={socialIconMouseOut}
            onMouseOver={socialIconMouseOver}
            onFocus={socialIconMouseOver}
          >
            <img src={iconSocialInstagram} alt="Instagram" />
          </button>
          <button type="button" aria-label="Add" className="social-icon add">
            +
          </button>
          {/* @todo tool tip can be a portal? */}
          <div
            onMouseOut={() => {
              socialAccountToolTip.current.classList.add('hidden');
            }}
            onMouseOver={() => {
              socialAccountToolTip.current.classList.remove('hidden');
            }}
            ref={socialAccountToolTip}
            className="social-options-tooltip hidden"
          >
            <div className="tooltipthingy" />
            <div className="tooltiptext" />
            <Link
              to="/profile"
              onClick={event => {
                event.preventDefault();
                setModalType('remove_account');
                handleModalOpen();
              }}
            >
              Disconnect account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
