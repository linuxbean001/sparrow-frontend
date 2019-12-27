import React from 'react';
import './updatepassword.css';
import Header from '../../components/header';
import FormBox from '../../components/formbox';
import FormBoxField from '../../components/formboxfield';
import Button from '../../components/Button';

const UpdatePassword = () => {
  return (
    <div>
      <Header />
      <FormBox title="Update your password">
        <FormBoxField label="New password" />
        <FormBoxField label="Confirm new password" />
        <Button>Update Password</Button>
      </FormBox>
    </div>
  );
};

export default UpdatePassword;
