import React from 'react';
import './settings.css';

import Dashboard from '../dashboard';
import FormBoxField from '../../components/formboxfield';
import Button from '../../components/Button';

const SettingsView = () => {
  return (
    <Dashboard>
      <div className="settings-container setting-container--setting">
        <h1 className="settings-header">Settings</h1>
        <div className="settings-card">
          <div className="settings-group">
            <div className="settings-meta">
              <h2 className="settings-group-header">Update your email</h2>
              <p className="setting-description">
                You’ll use this email address to login. We’ll also send
                important account notifications to this email address.
              </p>
            </div>
            <div className="settings-values">
              <FormBoxField label="Email Address" />
              <FormBoxField label="Confirm Email Address" />
              <Button>Update Email Address</Button>
            </div>
            <div className="clear" />
            <hr />
          </div>
          <div className="settings-group">
            <div className="settings-meta">
              <h2 className="settings-group-header">Update your password</h2>
              <p className="setting-description">
                Make sure you use a strong password. Don’t reuse passwords that
                you’ve used on other sites.
              </p>
            </div>
            <div className="settings-values">
              <FormBoxField type="password" label="New password" />
              <FormBoxField type="password" label="Confirm password" />
              <Button>Update Your Password</Button>
            </div>
            <div className="clear" />
            <hr />
          </div>
          <div className="settings-group last">
            <div className="settings-meta">
              <h2 className="settings-group-header">
                Update your billing method
              </h2>
              <p className="setting-description">
                We’ll use this billing method to charge you for your
                subscription plan.
              </p>
            </div>
            <div className="settings-values">
              <div className="radio-field">
                <label htmlFor="radio-one">
                  <input
                    type="radio"
                    name="demo"
                    value="cc"
                    id="radio-one"
                    className="form-radio"
                  />
                  Credit Card
                </label>
              </div>
              <div className="radio-field">
                <label htmlFor="radio-two">
                  <input
                    type="radio"
                    name="demo"
                    value="pp"
                    id="radio-two"
                    className="form-radio"
                  />
                  PayPal
                </label>
              </div>
              <div className="radio-field">
                <label htmlFor="radio-three">
                  <input
                    type="radio"
                    name="demo"
                    value="cb"
                    id="radio-three"
                    className="form-radio"
                  />
                  Coinbase
                </label>
              </div>
              <Button>Add Billing Method</Button>
            </div>
            <div className="clear" />
            <hr />
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default SettingsView;
