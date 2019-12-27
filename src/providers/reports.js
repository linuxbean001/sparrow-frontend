import { useReducer } from 'react';
import { createContainer } from 'unstated-next';

const ACTIONS = {
  UPDATE_REPORTS: 'UPDATE_REPORTS',
  RESET: 'RESET',
};

const initialState = {
  reports: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_REPORTS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

function useReportsHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateReports = reports => {
    dispatch({
      type: ACTIONS.UPDATE_REPORTS,
      data: {
        reports,
      },
    });
  };

  const resetReportsState = () =>
    dispatch({
      type: ACTIONS.RESET,
    });

  return { state, updateReports, resetReportsState };
}

const ReportsContainer = createContainer(useReportsHook);

export default ReportsContainer;
