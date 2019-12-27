import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './resetpassword.css';

import Header from '../../components/header';
import FormBox from '../../components/formbox';
import FormBoxField from '../../components/formboxfield';
import Button from '../../components/Button';

const ResetPasswordScreen = ({ history }) => {
  const handleBackButtonPress = event => {
    history.goBack();
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <FormBox title="Reset your password">
        <div className="ResetPassword__subHeader">
          Type in your email below and we’ll send you an email with instructions
          on how to reset your password.
        </div>
        <form onSubmit={handleSubmit}>
          <FormBoxField label="Email Address" />
          <Button className="Button--primary Button--fullWidth Button--large">
            Send Reset Email
          </Button>
          <button
            onClick={handleBackButtonPress}
            onKeyDown={handleBackButtonPress}
            className="ResetPassword__backButton"
            type="button"
          >
            Go Back
          </button>
        </form>
      </FormBox>
    </>
  );
};

export default withRouter(ResetPasswordScreen);
