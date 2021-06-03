
import { Grid, TextField, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ingredients: {
    width: '100%',
    margin: '10px',
    display: 'flex'
  },
  ingredient: {
    width: '40%',
    margin: '10px'
  },
  delBtn: {
    margin: 15
  }
});

const Ingredients = (props) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.ingredients}>
      <TextField 
        name='name'
        value={props.name}
        onChange={props.onChange}
        error={!!props.error}
        label='Ingredient Name'
        type='text'
        variant="outlined"
        className={classes.ingredient}
      />  
      <TextField 
        name='qty'
        value={props.qty}
        onChange={props.onChange}
        error={!!props.error}
        label='Ingredient Amount'
        type='text'
        variant="outlined"
        className={classes.ingredient}
      />
      <IconButton 
        edge="end" 
        aria-label="delete"
        className={classes.delBtn}
        onClick={props.onDelete}
      >
        <DeleteIcon />
      </IconButton>
    </Grid>
  )
};

export default Ingredients;