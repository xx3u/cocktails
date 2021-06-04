import { Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ListOfIngredients } from "../../components/ListOfIngredients/ListOfIngredients";
import { getCocktails } from "../../store/actions/cocktailsActions";
import { CocktailItem } from './../../components/CocktailItem/CocktailItem';
import { getMyCocktails } from './../../store/actions/cocktailsActions';

const Cocktails = (props) => {
  const cocktails = useSelector(state => state.cocktails.cocktails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.match.url === '/') {
      console.log('in /')
      dispatch(getCocktails())
    } else if (props.match.url === '/mycocktails') {
      console.log('in /mycocktails')
      dispatch(getMyCocktails())
    }
  }, [dispatch, props.match.url]);

  console.log('cocktails', cocktails)
  return (
    <Grid container spacing={2}>
      <Grid item container justify="space-between" alignItems="center" style={{marginBottom: 20}}>
        <Grid item style={{ margin: "0 auto" }}>
          <Typography variant="h5" color="primary">Cocktails</Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        {cocktails.map(cocktail => {
          return <CocktailItem 
            key={cocktail._id}
            name={cocktail.name}
            image={cocktail.image}
            published={cocktail.published}
            recipe={cocktail.recipe}
            children={
              cocktail.ingredients.map(ing => {
                return <ListOfIngredients 
                key={ing._id}
                name={ing.name}
                qty={ing.qty}
                />
              })
            }
          />
        })}
      </Grid>
    </Grid>
  )
};

export default Cocktails;