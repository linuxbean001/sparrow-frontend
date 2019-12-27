import { useReducer } from 'react';
import { createContainer } from 'unstated-next';

const ACTIONS = {
  UPDATE_CLIENTS: 'UPDATE_CLIENTS',
  UPDATE_SELECTED_CLIENT: 'UPDATE_SELECTED_CLIENT',
  RESET: 'RESET',
};

const initialState = {
  isClientsPopulated: false,
  clients: [],
  selectedClient: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CLIENTS:
      return {
        ...state,
        ...action.data,
      };
    case ACTIONS.UPDATE_SELECTED_CLIENT:
      return {
        ...state,
        selectedClient: state.clients.find(
          client => client.client_id === action.data.clientID
        ),
      };
    case ACTIONS.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

function useClientHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateClients = clients => {
    dispatch({
      type: ACTIONS.UPDATE_CLIENTS,
      data: {
        isClientsPopulated: !!clients.length,
        clients,
      },
    });
  };

  const resetClientState = () =>
    dispatch({
      type: ACTIONS.RESET,
    });

  const updateSelectedClient = clientID => {
    dispatch({
      type: ACTIONS.UPDATE_SELECTED_CLIENT,
      data: {
        clientID,
      },
    });
  };

  return {
    state,
    updateClients,
    resetClientState,
    updateSelectedClient,
  };
}

const ClientContainer = createContainer(useClientHook);

export default ClientContainer;
