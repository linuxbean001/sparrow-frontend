import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { UserContainer, ClientContainer } from '../../providers';
import useDropdown from '../../hooks/dropdown';

import { sortClientsAscendingByDate } from '../../helpers';

import './dashboard.css';

import logo from './images/logo-sparrow-icon.svg';
import notificationIcon from './images/icon-notification.svg';
import downIcon from './images/icon-down.svg';
import allAccounts from './images/icon-all-accounts.svg';
import disneyPlaceHolder from './images/disney.jpg';

const Dashboard = ({ children, notification }) => {
  const { state: userState } = UserContainer.useContainer();
  const {
    state: clientState,
    updateSelectedClient,
  } = ClientContainer.useContainer();
  const dropdown = useDropdown();

  const handleAccountLinkClick = (event, clientID) => {
    event.preventDefault();
    updateSelectedClient(clientID);
  };
  const renderPages = () => {
    const { selectedClient } = clientState;
    return sortClientsAscendingByDate(clientState.clients).map(client => {
      const buttonClasses = classnames(
        'Button',
        'Button--reset',
        'LeftNav__link',
        {
          active: client.client_id === selectedClient.client_id,
        }
      );
      return (
        <button
          type="button"
          className={buttonClasses}
          key={client.client_id}
          onClick={event => handleAccountLinkClick(event, client.client_id)}
        >
          <div className="LeftNav__imageWrapper">
            <img src={client.client_logo} alt={client.client_name} />
          </div>
          <div className="LeftNav__label">{client.client_name}</div>
        </button>
      );
    });
  };
  return (
    <div className="dashboard">
      <div className="topbar">
        <div className="nav">
          <Link to="/" className="active">
            Reports
          </Link>
          {/* <Link to="/dashboard/grow">Grow</Link>
              <Link to="/dashboard/engage">Engage</Link>
              <Link to="/dashboard/publish">Publish</Link> */}
        </div>
        <div className="notification-settings">
          <div className="notification-icon-container">
            <img src={notificationIcon} alt="notifcation" />
          </div>
          <button
            type="button"
            className="profile-dropdown"
            ref={dropdown.btnRef}
            onClick={dropdown.toggle}
          >
            <div className="profile-thumb">
              <img src={userState.user.profile_pic} width="32" alt="user" />
            </div>
            <div className="username">{`${userState.user.first_name} ${userState.user.last_name}`}</div>
            <div className="dropdown-arrow">
              <img src={downIcon} alt="down" />
            </div>
          </button>
        </div>
        <div className="profile-tooltip hidden" ref={dropdown.menuRef}>
          <div className="tooltipthingy" />
          <div className="tooltiptext" />
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/team">Team</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
      <div className="LeftNav">
        <div className="LeftNav__fixedContent">
          <Link to="/" className="LeftNav__link" tabIndex="0" role="button">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <Link
            to="/accounts"
            className="LeftNav__link"
            tabIndex="0"
            role="button"
          >
            <img src={allAccounts} alt="all accounts" />
            <div className="LeftNav__label">Accounts</div>
          </Link>
        </div>
        <div className="LeftNav__clientListWrapper">
          <div className="LeftNav__clientList">{renderPages()}</div>
        </div>
        <div
          className="account-icon"
          style={{ backgroundImage: `url(${disneyPlaceHolder})` }}
        />
      </div>
      <div className="content">
        {notification ? (
          <div className="notification">
            <div className="notification-content">
              <strong>Your facebook account has been disconnected.</strong>{' '}
              Please reconnect your account.
              <button type="button" className="reconnect-button">
                RECONNECT ACCOUNT
              </button>
            </div>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
