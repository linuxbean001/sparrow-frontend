import React from 'react';

import { Link } from 'react-router-dom';
import API from '../../api';
import FormBoxField from '../../components/formboxfield';
import Button from '../../components/Button';
import iconPlaceholder from './images/icon-placeholder-logo.svg';

const AddClientView = ({ edit }) => {
  const addClient = event => {
    const clientName = document.querySelector('input[name="client-name"]')
      .value;
    const clientEmail = document.querySelector('input[name="client-email"]')
      .value;
    let target = event.target;

    target.disabled = true;

    if (clientName.length > 0 && clientEmail.length > 0) {
      API.clients.create(
        {
          client_name: clientName,
          client_email: clientEmail,
        },
        res => {
          if (res.code && res.code == 400) {
            alert(res.message);
            target.disabled = false;
            return;
          }
          target.disabled = false;
          // onComplete();
        }
      );
    } else {
      alert('need email and client name');

      target.disabled = false;
    }
  };

  return (
    <div className="add-client-modal">
      <h1 className="add-client-title">
        {edit ? 'Edit Client' : 'Add client'}
      </h1>
      <div className="upload-logo">
        <img className="upload-placeholder-logo" src={iconPlaceholder} />
      </div>
      <div className="upload-cta">Upload Logo</div>
      <FormBoxField name="client-name" label="Client name" />
      <FormBoxField name="client-email" label="Clients email address" />
      <div className="social-connectors" />
      <Button onClick={addClient} style={{ marginBottom: '15px' }}>
        {edit ? 'Save Changes' : 'Add Client'}
      </Button>
      {edit ? <Link className="remove-cta">Remove Client</Link> : null}
    </div>
  );
};

export default AddClientView;
