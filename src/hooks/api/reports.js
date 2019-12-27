import API from '../../api';
import { ReportsContainer } from '../../providers';

const useGetReports = () => {
  const { updateReports } = ReportsContainer.useContainer();
  const getReports = async () => {
    const response = await API.reports.get();
    updateReports(response.data);
  };

  return getReports;
};

// eslint-disable-next-line import/prefer-default-export
export { useGetReports };
