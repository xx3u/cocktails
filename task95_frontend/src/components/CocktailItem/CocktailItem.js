import { Card, CardContent, CardMedia, Grid, List, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";


const useStyles = makeStyles(() => ({
  grid: {
    margin: '10px auto'
  },
  root: {
    display: 'flex',
    boxShadow: '0px 2px 4px 2px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    textDecoration: 'none'
  },
  content: {
    margin: '10px 20px',
  },
  img: {
    width: 300, 
    height: 300, 
    backgroundSize: 'contain',
    margin: '10px 20px',
    flex: '0 0 30%',
  }
}))

export const CocktailItem = (props) => {
  const classes = useStyles();
  let cardImage = 'http://localhost:8000/uploads/' + props.image;
  
  return(
    <Grid item className={classes.grid}>
      <Card className={classes.root}
      >
        <CardMedia 
          image={cardImage}
          className={classes.img}
        /> 
        <CardContent className={classes.grid}>
          <Typography component="h5" variant="h5" style={{ marginBottom: 10 }}>
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: 10 }}>
            {(props.published) ? 'Status: published': 'Status: not published'}
          </Typography>
          <List variant="body2">
            INGREDIENTS: {props.children}
          </List>
          <Typography variant="body2" component="p" style={{ marginBottom: 10 }}>
            RECIPE: {props.recipe}
          </Typography>
        </CardContent>    
      </Card>
    </Grid>
  )
}