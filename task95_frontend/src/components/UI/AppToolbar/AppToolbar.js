import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AnonymousMenu } from './Menus/AnonymousMenu/AnonymousMenu';
import { UserMenu } from './Menus/UserMenu/UserMenu';


const useStyles = makeStyles(theme => {
  return {
    mainLink: {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: '#ccc'
      }
    },
    staticToolbar: {
      marginBottom: theme.spacing(2)
    },
    block: {
      display: 'inline-block',
      verticalAlign: 'middle',
    }
  };
});

const AppToolbar = () => {
  const classes = useStyles();
  const user = useSelector(state => state.users.user);

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h5' className={classes.block}>
                <Link className={classes.mainLink} to='/'>
                  Cocktails Recipes
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              { user ? <UserMenu user={user}/> : <AnonymousMenu /> } 
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.staticToolbar} />
    </>
  );
};

export default AppToolbar;