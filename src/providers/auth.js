import { useState } from 'react';
import { createContainer } from 'unstated-next';

const initialState = {
  isAuthenticated: false,
  acessToken: '',
};

function useAuthHook() {
  const [state, updateAuthData] = useState(initialState);

  const setUserAuthenticated = status =>
    updateAuthData({
      ...state,
      isAuthenticated: status,
    });

  const updateAccessToken = accessToken => {
    updateAuthData({
      ...state,
      accessToken,
    });
  };

  const resetAuthState = () => {
    updateAuthData({
      ...initialState,
    });
  };
  return {
    state,
    setUserAuthenticated,
    updateAccessToken,
    resetAuthState,
  };
}

const AuthContainer = createContainer(useAuthHook);

export default AuthContainer;
