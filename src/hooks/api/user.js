import API from '../../api';
import { useSignOut } from './auth';
import { AuthContainer, UserContainer } from '../../providers';

const useGetUser = () => {
  const { setUser } = UserContainer.useContainer();
  const { setUserAuthenticated } = AuthContainer.useContainer();
  const signout = useSignOut();
  const getUser = async () => {
    try {
      const response = await API.user.get();
      setUser(response.data[0]);
      setUserAuthenticated(true);
    } catch (error) {
      signout();
    }
  };

  return getUser;
};

const useCreateUser = () => {
  const createUser = async data => {
    await API.user.create(data);
  };

  return createUser;
};

export { useGetUser, useCreateUser };
