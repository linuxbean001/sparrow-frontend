import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { useAuthenticateUser } from '../../hooks/api/auth';

import Header from '../../components/header';
import FormBox from '../../components/formbox';
import FormBoxField from '../../components/formboxfield';
import Button from '../../components/Button';

import './login.css';
import { useGetClients } from '../../hooks/api/client';
import { PagesContainer } from '../../providers';
import { useGetPages } from '../../hooks/api/pages';

// prevents user pressing back
const LoginScreen = () => {
  const { register, handleSubmit, formState, errors, setError } = useForm();
  const history = useHistory();
  const authenticateUser = useAuthenticateUser();
  const { state: pageState } = PagesContainer.useContainer();

  const getClients = useGetClients();
  const getPages = useGetPages();

  const handleFormSubmit = async (data, event) => {
    event.preventDefault();
    try {
      await authenticateUser(data.email, data.password, 'local');
    } catch (error) {
      setError('password', null, error.message);
    }

    try {
      await getClients();
      await getPages();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (pageState.isPagesPopulated) {
      if (pageState.pages?.length) {
        history.replace('/');
      } else {
        history.replace('/addsocialaccounts');
      }
    }
  }, [pageState.isPagesPopulated]);

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormBox title="Log in to your account" className="Login__formBox">
          <FormBoxField
            name="email"
            label="Email Address"
            ref={register({
              required: 'Please enter your email',
            })}
            error={errors.email && errors.email.message}
          />
          <FormBoxField
            name="password"
            label="Password"
            type="password"
            ref={register({
              required: 'Please enter your password',
            })}
            error={errors.password && errors.password.message}
          >
            <div className="Login__forgotPasswordLink">
              <Link to="/login/resetpassword">Forgot?</Link>
            </div>
          </FormBoxField>
          <Button
            disabled={formState.isSubmitting}
            type="submit"
            className="Button--primary Button--fullWidth Button--large"
          >
            Log In
          </Button>
          <div className="Login__signupLink">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </div>
        </FormBox>
      </form>
    </div>
  );
};

export default LoginScreen;
