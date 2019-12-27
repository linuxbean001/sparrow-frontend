import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classnames from 'classnames';

import API from '../../api';
import { AuthContainer, UserContainer, PagesContainer } from '../../providers';
import { useGetPages } from '../../hooks/api/pages';
import { useCreateClient } from '../../hooks/api/client';
import hasValidLogin from '../../hooks/hasValidLogin';

import Header from '../../components/header';
import FormBox from '../../components/formbox';
import Button from '../../components/Button';

import './addsocialaccounts.css';

import logoFacebook from './images/logo-fb.png';
import logoGoogle from './images/logo-google.png';
import logoInstagram from './images/logo-instagram.png';
import logoTwitter from './images/logo-twitter.png';

function AddSocialAccountsView() {
  const history = useHistory();
  const [selectedPagesID, setSelectedPagesID] = useState([]);
  const { state: authenticationState } = AuthContainer.useContainer();
  const { state: pageState } = PagesContainer.useContainer();
  const { state: userState } = UserContainer.useContainer();
  const getPages = useGetPages();
  const createClient = useCreateClient();

  const handleConnect = (event, provider) => {
    event.preventDefault();
    const authUrl = `${API.serverUrl}/oauth/${provider}/?feathers_token=${authenticationState.accessToken}`;
    window.location.assign(authUrl);
  };

  const handleSelectChange = event => {
    event.preventDefault();
    const selectedPage = pageState.pages?.find(
      page => page.page_provider_identifier === event.target.value
    );
    if (!selectedPagesID.includes(selectedPage.page_id)) {
      setSelectedPagesID([...selectedPagesID, selectedPage.page_id]);
    }
  };

  const handleAddSocialAccount = async event => {
    const { user } = userState;
    const clientData = {
      business_id: user.business_id,
      client_logo: user.profile_pic,
      client_name: `${user.first_name} ${user.last_name}`,
      client_email: user.email,
      page_ids: selectedPagesID,
    };
    event.preventDefault();
    await createClient(clientData);
    await getPages();
    history.replace('/');
  };

  const getFilteredPages = provider => {
    return pageState.pages?.filter(page => page.page_type === provider);
  };

  const displayListItemAction = (provider, disabled = false) => {
    const filteredPages = getFilteredPages(provider);
    const connectButtonClasses = classnames(
      'Button',
      'Button--outline',
      'AddSocialAccounts__connectButton',
      {
        'AddSocialAccounts__connectButton--coming-soon': disabled,
      }
    );
    if (filteredPages?.length) {
      return (
        <select
          onChange={event => handleSelectChange(event)}
          defaultValue=""
          disabled={disabled}
        >
          <option value="" disabled hidden>
            Choose here
          </option>
          {filteredPages.map(page => (
            <option key={page.page_id} value={page.page_provider_identifier}>
              {page.page_name}
            </option>
          ))}
        </select>
      );
    }
    return (
      <Button
        type="button"
        disabled={disabled}
        className={connectButtonClasses}
        onClick={event => handleConnect(event, provider)}
      >
        connect
      </Button>
    );
  };
  hasValidLogin(() => {
    getPages();
  });

  const listItemClasses = provider =>
    classnames('AddSocialAccounts__listItem', {
      'AddSocialAccounts__listItem--has-subTitle': provider === 'instagram',
      'AddSocialAccounts__listItem--has-pages':
        getFilteredPages(provider) && getFilteredPages(provider).length,
      'AddSocialAccounts__listItem--disabled': ['google', 'twitter'].includes(
        provider
      ),
    });
  return (
    <div className="AddSocialAccounts">
      <Header />
      <FormBox title="Add your social media accounts">
        <div className="AddSocialAccounts__subHeader">
          Adding your accounts lets you try out Sparrow’s features. You’ll be
          able to add clients and their accounts once you have your account set
          up.
        </div>
        <div className="AddSocialAccounts__connectAccountHeader">
          Connect Accounts
        </div>
        <section className="AddSocialAccounts__listWrapper" role="list">
          <div className={listItemClasses('facebook')} role="listitem">
            <div className="AddSocialAccounts__socialItemInfo">
              <div className="AddSocialAccounts__listItemIcon">
                <img src={logoFacebook} alt="Facebook" />
              </div>
              <div className="AddSocialAccounts__listItemTitle">Facebook</div>
            </div>
            <div className="AddSocialAccounts__listItemAction">
              {displayListItemAction('facebook')}
            </div>
          </div>
          <div className={listItemClasses('instagram')} role="listitem">
            <div className="AddSocialAccounts__socialItemInfo">
              <div className="AddSocialAccounts__listItemIcon">
                <img src={logoInstagram} alt="instagram" />
              </div>
              <div className="AddSocialAccounts__listItemTitleWrapper">
                <div className="AddSocialAccounts__listItemTitle">
                  Instagram
                </div>
                <div className="AddSocialAccounts__listItemSubTitle">
                  Link your instagram account to the associated facebook page.
                  <a href="#">Learn more</a>
                </div>
              </div>
            </div>
            <div className="AddSocialAccounts__listItemAction">
              {displayListItemAction('instagram')}
            </div>
          </div>
          <div className={listItemClasses('google')} role="listitem">
            <div className="AddSocialAccounts__socialItemInfo">
              <div className="AddSocialAccounts__listItemIcon">
                <img src={logoGoogle} alt="google" />
              </div>
              <div className="AddSocialAccounts__listItemTitle">Google</div>
            </div>
            <div className="AddSocialAccounts__listItemAction">
              {displayListItemAction('google', true)}
            </div>
          </div>
          <div role="listitem" className={listItemClasses('twitter')}>
            <div className="AddSocialAccounts__socialItemInfo">
              <div className="AddSocialAccounts__listItemIcon">
                <img src={logoTwitter} alt="twitter" />
              </div>
              <div className="AddSocialAccounts__listItemTitle">Twitter</div>
            </div>
            <div className="AddSocialAccounts__listItemAction">
              {displayListItemAction('twitter', true)}
            </div>
          </div>
        </section>
        <Button
          className="Button--primary Button--fullWidth Button--large AddSocialAccounts__continueButton"
          onClick={handleAddSocialAccount}
        >
          Continue to Dashboard
        </Button>
        <div className="AddSocialAccounts__anotherClient">
          <Link to="#">Add another client</Link>
        </div>
      </FormBox>
    </div>
  );
}

export default AddSocialAccountsView;
