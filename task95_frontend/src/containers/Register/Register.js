import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileInput from '../../components/UI/FileInput/FileInput';
import FormElement from '../../components/UI/Form/FormElement/FormElement';
import UserForm from '../../components/UserForm/UserForm';
import { registerUser } from './../../store/actions/usersActions';


const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.registerError);

  const [state, setState] = useState({
    username: '',
    password: '',
    displayName: '',
    email: '',
    avatar: ''
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const fileChangeHandler = e => {
    const file = e.target.files[0];
    setState(prevState => {
      return {...prevState, avatar: file}
    })
  };

  const submitFormHandler = async e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });
    console.log('state in form submit', state)
    await dispatch(registerUser({...state}));
  };

  const getFieldError = fieldName => {
    try {
      return error.errors[fieldName].message;
    } catch(e) {
      return undefined;
    }
  };

  return (
    <UserForm
      onSubmit={submitFormHandler}
      title='Sign Up'
    >
      <FormElement
        name='username'
        value={state.username}
        onChange={inputChangeHandler}
        error={getFieldError('username')}
        label='Username'
        type='text'
      />
      <FormElement
        name='password'
        value={state.password}
        onChange={inputChangeHandler}
        error={getFieldError('password')}
        label='Password'
        type='password'
      />
      <FormElement
        name='displayName'
        value={state.displayName}
        onChange={inputChangeHandler}
        error={getFieldError('displayName')}
        label='Display Name'
        type='text'
      />
      <FormElement
        name='email'
        value={state.email}
        onChange={inputChangeHandler}
        error={getFieldError('email')}
        label='Email'
        type='email'
      />
      <FileInput 
        name="avatar"
        label="Avatar"
        onChange={fileChangeHandler}
      />
    </UserForm>
  );
}

export default Register;