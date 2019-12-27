import { useState } from 'react';
import { createContainer } from 'unstated-next';

const initialState = {
  isLoaded: false,
};

function useApplicationHook() {
  const [state, updateApplicationData] = useState(initialState);
  const setApplicationLoaded = status =>
    updateApplicationData({
      ...state,
      isLoaded: status,
    });

  return { state, setApplicationLoaded };
}

const ApplicationContainer = createContainer(useApplicationHook);

export default ApplicationContainer;
