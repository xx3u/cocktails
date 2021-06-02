import { React, useState } from 'react';
import { Button, IconButton, Menu, MenuItem, Fade, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
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
