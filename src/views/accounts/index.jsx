import React, { useState } from 'react';
import Dashboard from '../dashboard';

import './accounts.css';

import Button from '../../components/Button';
import useModal from '../../hooks/components/modal';
import AddClientView from './addclient';
import AccountCard from './accountcard';

import Store from '../../store';
import API from '../../api';

// @todo popups
// @todo add client button
const AccountCards = ({ accounts }) => {
  const accountNodes = [];
  accounts.forEach((account, i) => {
    accountNodes.push(<AccountCard account={account} key={i} />);
  });
  return accountNodes;
};

const AccountsView = () => {
  const [modalShowing, setModalShowing] = useState(0);
  const [accounts, setAccounts] = useState(0);
  const { handleModalOpen, handleModalClose, Modal } = useModal();
  const getAccounts = cb => {
    API.clients.get(body => {
      if (body.data) {
        Store.set('clients', body.data);
        setAccounts(body.data);
        if (cb) cb();
      }
    });
  };

  if (!accounts) {
    setAccounts(Store.get('clients') || {});
    getAccounts();
  }

  const modalClosed = () => {
    handleModalClose();
  };

  return (
    <Dashboard>
      <div className="accounts-container">
        <h1 className="accounts-header">Accounts</h1>
        <Modal>
          <AddClientView
            onComplete={() => {
              getAccounts(() => {
                handleModalClose();
              });
            }}
          />
        </Modal>
        <Button
          onClick={() => {
            handleModalOpen();
          }}
          style={{ marginTop: '10px', float: 'right', width: '181px' }}
        >
          Add Client
        </Button>
        <div className="clear" />

        {accounts ? <AccountCards accounts={accounts} /> : null}
      </div>
    </Dashboard>
  );
};

export default AccountsView;
