import API from '../../api';
import { ClientContainer, ReportsContainer } from '../../providers';
import { sortClientsAscendingByDate } from '../../helpers';

const useGetClients = () => {
  const {
    state: clientState,
    updateClients,
    updateSelectedClient,
  } = ClientContainer.useContainer();
  const getClients = async () => {
    const response = await API.clients.get();
    updateClients(response.data);
    if (!clientState.selectedClient && response.data?.length) {
      updateSelectedClient(
        sortClientsAscendingByDate(response.data)[0].client_id
      );
    }
  };

  return getClients;
};

const useCreateClient = () => {
  const { state: clientState, updateClients } = ClientContainer.useContainer();
  const createClient = async data => {
    const response = await API.clients.create(data);
    updateClients([...clientState.clients, response]);
    return response;
  };
  return createClient;
};

const useGetClientRecords = () => {
  const { updateReports } = ReportsContainer.useContainer();
  const getClientRecords = async (clientID, queryParams = '') => {
    const queryString = queryParams ? `?${queryParams}` : '';
    const response = await API.clients.get(
      `${clientID}/reports/${queryString}`
    );
    updateReports(response.data);
  };
  return getClientRecords;
};

export { useGetClients, useCreateClient, useGetClientRecords };
