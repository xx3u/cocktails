import React from "react";
import { CssBaseline, Avatar, Typography, Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserForm = (props) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth={props.maxWidth}>
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            {props.icon}
        </Avatar>
        <Typography component="h1" variant="h5">
            {props.title}
        </Typography>
        <form className={classes.form} onSubmit={props.onSubmit}>
            <Grid container spacing={2}>
                {props.children}
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                {props.title}
            </Button>
            <Grid container>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default UserForm;