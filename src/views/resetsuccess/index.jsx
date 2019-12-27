import React from 'react';
import Header from '../../components/header';
import FormBox from '../../components/formbox';
import './resetsuccess.css';
import CheckMarkSVG from './images/icon-checkmark.svg';

import Button from '../../components/Button';

const ResetSuccess = () => {
  return (
    <div>
      <Header />
      <FormBox
        title="Password reset instructions sent"
        image={CheckMarkSVG}
        imageAlt="Success"
      >
        <div className="resetpassword description">
          Check your email and click on the reset link to create a new password.
          The link will expire in 24 hours.
        </div>
        <Button>Done</Button>
      </FormBox>
    </div>
  );
};

export default ResetSuccess;
