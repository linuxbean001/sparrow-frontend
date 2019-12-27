import { useState } from 'react';
import { createContainer } from 'unstated-next';

const initialState = {
  isPagesPopulated: false,
  pages: [],
};

function usePagesHook() {
  const [state, updatePageData] = useState(initialState);

  const updatePages = pages => {
    updatePageData({
      ...state,
      isPagesPopulated: true,
      pages,
    });
  };

  const resetPageState = () =>
    updatePageData({
      ...initialState,
    });

  return { state, updatePages, resetPageState };
}

const PagesContainer = createContainer(usePagesHook);

export default PagesContainer;
