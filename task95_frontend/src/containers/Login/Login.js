import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormElement from '../../components/UI/Form/FormElement/FormElement';
import UserForm from '../../components/UserForm/UserForm';
import { loginUser } from '../../store/actions/usersActions';

const useStyles = makeStyles(() => ({
  alert: {
    width: '100%',
  },
}));

const Login = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.loginError);

  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const submitFormHandler = async e => {
    e.preventDefault();
    dispatch(loginUser({ ...state }));
  };

  return (
    <UserForm
      onSubmit={submitFormHandler}
      title='Sign In'
    >
      {error && <Alert
        severity='error'
        className={classes.alert}
      >
        <AlertTitle>Error</AlertTitle>
        {error.response.data.error}
      </Alert>}
        <FormElement
          name='username'
          value={state.username}
          onChange={inputChangeHandler}
          label='Username'
          type='text'
        />
        <FormElement
          name='password'
          value={state.password}
          onChange={inputChangeHandler}
          label='Password'
          type='password'
        />
    </UserForm>
  );
}

export default Login;