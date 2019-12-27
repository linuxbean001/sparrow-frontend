import API from '../../api';
import { PagesContainer } from '../../providers';

const useGetPages = () => {
  const { updatePages } = PagesContainer.useContainer();
  const getPages = async () => {
    const response = await API.pages.get();
    updatePages(response.data);
  };

  return getPages;
};

const usePatchPage = () => {
  const { state: clientsState, updatePages } = PagesContainer.useContainer();

  const patchPage = async data => {
    const response = await API.pages.update(data);
    updatePages([...clientsState.pages, response]);
  };
  return patchPage;
};

export { useGetPages, usePatchPage };
