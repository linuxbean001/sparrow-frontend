import React, { useState } from 'react';

import './profile.css';
import iconPlaceholder from './images/icon-placeholder-logo.svg';

import Dashboard from '../dashboard';
import FormBoxField from '../../components/formboxfield';
import Button from '../../components/Button';

import Store from '../../store';
import API from '../../api';

const ProfileView = () => {
  const [business, setBusiness] = useState(0);
  const [user, setUser] = useState(0);

  // if (!business) {
  //   setBusiness(Store.get('business') || {});
  //   // if the state of business has not been set yet
  //   API.business.get(body => {
  //     // there could be multiple businesses here
  //     if (body.data) {
  //       Store.set('business', body.data[0]);
  //       setBusiness(body.data[0]);
  //     }
  //   });
  // }

  // user object is filled by authentication it SHOULD exist, and we should only
  // need to refresh it
 
  // if (!user) {
  //   console.log('User:',user);
  //   setUser(Store.get('user'));
  // } else {
  //   console.log('SucesUser:',user);
  //   API.user.get({ id: user.user_id }, user => {
  //     Store.set('user', user);
  //   });
  // }

  function updateBusiness(event) {
    // let businessName = document.querySelector('input[name="business_name"]');
    // let target = event.target;
    // if (businessName.value.length > 0) {
    //   target.disabled = true;
    //   API.business.update(
    //     {
    //       id: business.business_id,
    //       payload: {
    //         business_name: businessName.value,
    //       },
    //     },
    //     res => {
    //       Store.merge('business', {
    //         business_name: businessName.value,
    //       });
    //       target.disabled = false;
    //     }
    //   );
    // }
  }

  function updateUserInfo(event) {
    // let firstName = document.querySelector('input[name="first_name"]');
    // let lastName = document.querySelector('input[name="last_name"]');
    // let target = event.target;
    // if (firstName.value.length > 0 || lastName.value.length > 0) {
    //   target.disabled = true;
    //   API.user.update(
    //     {
    //       id: user.user_id,
    //       payload: {
    //         first_name: firstName.value || user.first_name,
    //         last_name: lastName.value || user.last_name,
    //       },
    //     },
    //     res => {
    //       Store.merge('user', {
    //         first_name: firstName.value || user.first_name,
    //         last_name: lastName.value || user.last_name,
    //       });
    //       target.disabled = false;
    //     }
    //   );
    // }
  }

  return (
    <Dashboard>
      <div className="settings-container setting-container--profile">
        <h1 className="settings-header">Profile</h1>
        <div className="settings-card">
          <div className="settings-group">
            <div className="settings-meta">
              <h2 className="settings-group-header">
                Update your business profile
              </h2>
              <p className="setting-description">
                We’ll include your business logo and name in your reports.
              </p>
            </div>
            <div className="settings-values">
              <div
                className="upload-logo"
                // style={{
                //   backgroundImage: `url(${
                //     business && business.business_logo
                //       ? business.business_logo
                //       : iconPlaceholder
                //   })`,
                // }}
              />

              <div className="upload--logo">
                <div className="profile__img">
                  <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" />
                </div>
                <ul class="profile__anchor__content">
                  <li><a href="#">Change</a></li>
                  <li><a href="#">Remove</a></li>
                </ul>
              </div>

              
              <FormBoxField
                name="business_name"
                label="Business Name"
                //placeholder={business.business_name}
              />
              <Button onClick={updateBusiness}>
                Update Business Information
              </Button>
            </div>
            <div className="clear" />
            <hr />
          </div>
          <div className="settings-group last">
            <div className="settings-meta">
              <h2 className="settings-group-header">
                Update your personal profile
              </h2>
              {/* <p className="setting-description">
                We’ll include your business logo and name in your reports.
              </p> */}
            </div>
            <div className="settings-values">
              <FormBoxField
                label="First Name"
                name="first_name"
                //placeholder={user.first_name}
              />
              <FormBoxField
                label="Last Name"
                name="last_name"
                //placeholder={user.last_name}
              />
              <Button onClick={updateUserInfo}>
                Update Personal Information
              </Button>
            </div>
            <div className="clear" />
            <hr />
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default ProfileView;
