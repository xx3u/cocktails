import { Grid, Typography, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ListOfIngredients } from "../../components/ListOfIngredients/ListOfIngredients";
import { deleteCocktail, getCocktails, getPublishedCocktails, publishCocktail } from "../../store/actions/cocktailsActions";
import { CocktailItem } from './../../components/CocktailItem/CocktailItem';
import { getMyCocktails } from './../../store/actions/cocktailsActions';

const Cocktails = (props) => {
  const cocktails = useSelector(state => state.cocktails.cocktails);
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.match.url === '/' && user.role === 'user') {
      dispatch(getPublishedCocktails());
    } else if (props.match.url === '/mycocktails') {
      dispatch(getMyCocktails())
    } else if (user.role === 'admin') {
      dispatch(getCocktails())
    }
  }, [dispatch, props.match.url, user]);

  const removeCocktail = (id) => {
    dispatch(deleteCocktail(id));
  };

  const publishStatusCocktail = (id) => {
    dispatch(publishCocktail(id))
  };

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
            buttons={
              user.role === 'admin' ?
              <>
                <Button 
                  variant="outlined" 
                  disabled={cocktail.published} 
                  style={{marginRight: 10}}
                  onClick={() => publishStatusCocktail(cocktail._id)}
                >Publish</Button>
                <Button 
                  variant="outlined"
                  onClick={() => removeCocktail(cocktail._id)}
                >Delete</Button>
              </>
              : null
            }
          />
        })}
      </Grid>
    </Grid>
  )
};

export default Cocktails;