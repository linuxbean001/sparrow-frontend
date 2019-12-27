import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactModal from 'react-modal';
import { CookiesProvider } from 'react-cookie';

import {
  UserContainer,
  AuthContainer,
  ClientContainer,
  ApplicationContainer,
  PagesContainer,
  ReportsContainer,
} from './providers';

import './index.css';

import App from './App';

ReactModal.setAppElement(document.getElementById('root'));

const ConnectedApp = () => (
  <ApplicationContainer.Provider>
    <AuthContainer.Provider>
      <UserContainer.Provider>
        <ClientContainer.Provider>
          <PagesContainer.Provider>
            <ReportsContainer.Provider>
              <CookiesProvider>
                <Router>
                  <App />
                </Router>
              </CookiesProvider>
            </ReportsContainer.Provider>
          </PagesContainer.Provider>
        </ClientContainer.Provider>
      </UserContainer.Provider>
    </AuthContainer.Provider>
  </ApplicationContainer.Provider>
);

// render the application component to the `root` element
ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
