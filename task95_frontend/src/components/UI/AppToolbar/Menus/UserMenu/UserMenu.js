import { Avatar, Button, Fade, IconButton, Menu, MenuItem } from '@material-ui/core';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from './../../../../../store/actions/usersActions';

export const UserMenu = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };

  const image = 'http://localhost:8000/uploads/' + user.avatar;

  return (
    <>
      <Button 
        color="inherit"
        component={Link}
        to="/cocktail/new"
        variant="outlined"
        style={{ margin: 10}}
      >
        Create Cocktail
      </Button>
      <Button 
        color="inherit"
        component={Link}
        to="/mycocktails"
        variant="outlined"
      >
        My Cocktails
      </Button>
      <Button 
        aria-controls='fade-menu'
        aria-haspopup='true'
        color='inherit'
        onClick={handleClick}
      >
        Hello, {user.displayName}
      </Button>  
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        color='inherit'
      >
        <Avatar src={image} />
      </IconButton>
    </>
  )
};
