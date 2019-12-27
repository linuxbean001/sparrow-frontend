import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';

import { ApplicationContainer, PagesContainer } from './providers';
import hasValidLogin from './hooks/hasValidLogin';
import { useGetClients } from './hooks/api/client';
import { useGetUser } from './hooks/api/user';

import AddSocialAccountsView from './views/addsocialaccounts';
import SignUp from './views/signup';
import LoginScreen from './views/login';
import ResetPasswordScreen from './views/resetpassword';
import ResetPasswordScreenSuccess from './views/resetsuccess';
import UpdatePassword from './views/updatepassword';
import ReportsView from './views/reports';
import AccountsView from './views/accounts';
import SettingsView from './views/settings';
import TeamView from './views/team';
import ProfileView from './views/profile';
import LogoutView from './views/logout';

import './App.css';
import { useGetPages } from './hooks/api/pages';

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const {
    state: applicationState,
    setApplicationLoaded,
  } = ApplicationContainer.useContainer();
  const { state: pagesState } = PagesContainer.useContainer();
  const getUser = useGetUser();
  const getClients = useGetClients();
  const getPages = useGetPages();

  hasValidLogin(async () => {
    await getUser();
    await getClients();
    await getPages();
    setApplicationLoaded(true);
  });
  useEffect(() => {
    if (pagesState.isPagesPopulated) {
      if (pagesState.pages?.length) {
        if (['/signup', '/login'].includes(location.pathname)) {
          history.replace('/');
        }
      } else {
        if (['/signup', '/login'].includes(location.pathname)) {
          history.replace('/addsocialaccounts');
        }
      }
    }
  }, [pagesState.isPagesPopulated]);
  if (applicationState.isLoaded) {
    return (
      <div className="App">
        <Route exact path="/" component={ReportsView} />
        <Route exact path="/profile" component={ProfileView} />
        <Route exact path="/settings" component={SettingsView} />
        <Route exact path="/accounts" component={AccountsView} />
        <Route exact path="/team" component={TeamView} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/addsocialaccounts"
          component={AddSocialAccountsView}
        />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/logout" component={LogoutView} />
        <Route
          exact
          path="/login/resetpassword"
          component={ResetPasswordScreen}
        />
        <Route exact path="/login/updatepassword" render={UpdatePassword} />
        <Route
          exact
          path="/login/resetpassword/success"
          component={ResetPasswordScreenSuccess}
        />
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default App;
