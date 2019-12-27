import { useState } from 'react';
import { createContainer } from 'unstated-next';

const initialState = {
  isUserPopulated: false,
  user: null,
};

function useUserHook() {
  const [state, updateUserData] = useState(initialState);
  const setUserPopulated = status =>
    updateUserData({
      ...state,
      isUserPopulated: status,
    });
  const setUser = user =>
    updateUserData({
      ...state,
      isUserPopulated: true,
      user,
    });
  const resetUserState = () =>
    updateUserData({
      ...initialState,
    });

  return { state, setUserPopulated, setUser, resetUserState };
}

const UserContainer = createContainer(useUserHook);

export default UserContainer;
