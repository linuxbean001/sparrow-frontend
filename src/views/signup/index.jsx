import React, { useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from 'react-hook-form';

import { useCreateUser } from '../../hooks/api/user';

import Header from '../../components/header';
import FormBox from '../../components/formbox';
import FormBoxField from '../../components/formboxfield';
import Button from '../../components/Button';

import iconPlaceholder from './images/icon-placeholder-logo.svg';
import './signup.css';

// @todo logo upload widget
// @todo validation for emai address style
// @todo first split form input for firstname/lastname
const SignUp = () => {
  const history = useHistory();
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const createUser = useCreateUser();
  const fileInputRef = useRef(null);

  const uploadImage = event => {
    event.preventDefault();
    fileInputRef.current.click();
  };
  const handleFormSubmit = async (data, event) => {
    event.preventDefault();
    try {
      await createUser(data);
      history.replace('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = event => {
    setValue('profile_pic', event.target.value);
  };

  useEffect(() => {
    register(
      { name: 'profile_pic', type: 'custom' },
      { required: 'Please upload an image' }
    );
  }, [register]);

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormBox title="Create account">
          <div
            className="Signup__uploadLogo"
            onClick={uploadImage}
            onKeyDown={uploadImage}
            role="button"
            tabIndex="0"
          >
            <div className="Signup__uploadLogoImage ">
              <img
                className="Signup__uploadLogoPlaceholder"
                src={iconPlaceholder}
                alt="Upload Icon"
              />
            </div>
            <div className="Signup__uploadLogoTitle">Upload Logo</div>
            <div className="Signup__logoError">
              {errors.profile_pic && errors.profile_pic.message}
            </div>
          </div>
          <input
            name="profile_pic"
            type="file"
            className="Signup__uploadFile"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
          />
          <FormBoxField
            name="first_name"
            label="First name"
            ref={register({ required: 'Please enter your first name.' })}
            error={errors.first_name && errors.first_name.message}
          />
          <FormBoxField
            name="last_name"
            label="Last name"
            ref={register({ required: 'Please enter your last name.' })}
            error={errors.last_name && errors.last_name.message}
          />
          <FormBoxField
            name="business_name"
            label="Business name"
            ref={register({ required: 'Please enter your business name' })}
            error={errors.last_name && errors.last_name.message}
          />
          <FormBoxField
            name="email"
            label="Email address"
            ref={register({ required: 'Please enter your Email address' })}
            error={errors.email && errors.email.message}
          />
          <FormBoxField
            name="password"
            label="Password"
            type="password"
            ref={register({
              required: 'Please enter your password',
              minLength: 8,
            })}
            error={errors.password && errors.password.message}
          />
          <FormBoxField
            name="passwordconf"
            label="Confirm password"
            type="password"
            ref={register({
              validate: value => value === watch('password'),
            })}
            error={errors.passwordconf && 'Passwords do not match'}
          />
          <FormBoxField
            type="checkbox"
            name="tandc"
            value="tandc"
            className="FormField__label--inline Signup__checkboxFormField"
            inputClasses="Signup__checkBoxInput"
            ref={register({
              required: 'Please accept the terms & conditions to continue',
            })}
            error={errors.tandc && errors.tandc.message}
          >
            I agree to the
            <Link to="/tandc" target="_blank" className="FormField__terms">
              terms and conditions
            </Link>
          </FormBoxField>
          <Button
            className="Button--primary Button--fullWidth Button--large"
            type="submit"
          >
            Create Account
          </Button>
          <div className="Signup__loginLink">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </FormBox>
      </form>
    </div>
  );
};

export default SignUp;
