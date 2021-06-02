import { React } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


export const AnonymousMenu = () => {
  return (
    <>
      <Button 
        color='inherit'
        component={Link}
        to='/register'
      >
        Register
      </Button>
      <Button 
        color='inherit'
        component={Link}
        to='/login'
      >
        Login
      </Button>
    </>
  )
};
