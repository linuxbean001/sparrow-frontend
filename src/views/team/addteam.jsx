import React from 'react';

import { Link } from 'react-router-dom';
import FormBoxField from '../../components/formboxfield';
import Button from '../../components/Button';

import API from '../../api';

const AddTeamMemberView = ({ edit, onComplete }) => {
  const createMember = event => {
    const emailAddress = document.querySelector('[name="email_address"]').value;
    const fullName = document.querySelector('[name="full_name"]').value;
    const nameParts = fullName.split(' ');
    const { target } = event;

    if (emailAddress.length > 0 && fullName.length > 0) {
      target.disabled = true;
      API.user.create(
        {
          user: {
            email: emailAddress,
            password: 'test@123',
            first_name: nameParts[0] || '',
            last_name: nameParts[1] || '',
            role: 'guest',
            business_name: 'PayPal Inc.',
          },
          at: true,
        },
        res => {
          if (res.code && res.code == 400) {
            alert(res.message);
            target.disabled = false;
            return;
          }
          target.disabled = false;
          onComplete();
        }
      );
    } else {
      alert('E-mail Address and Name Required');
    }
  };

  return (
    <div className="add-team-modal">
      <h1 className="add-team-title">
        {edit ? 'Edit Team Member' : 'Add Team Member'}
      </h1>
      <FormBoxField name="full_name" label="Full name" />
      <FormBoxField name="email_address" label="Email address" />
      <div className="social-connector-label">Clients to provide access to</div>
      <div className="social-connectors">
        <div className="client-selector">
          {/* <input type='checkbox' />
        <div className='client-name-label'>Client Name</div> */}
        </div>
      </div>
      <Button onClick={createMember} style={{ marginBottom: '15px' }}>
        {edit ? 'Save Changes' : 'Send Invite'}
      </Button>
      {edit ? (
        <Link to="#remove" className="remove-cta">
          Remove Member
        </Link>
      ) : null}
    </div>
  );
};

export default AddTeamMemberView;
