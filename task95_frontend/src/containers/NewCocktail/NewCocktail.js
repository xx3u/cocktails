import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ingredients from '../../components/Ingredients/Ingredients';
import FileInput from '../../components/UI/FileInput/FileInput';
import FormElement from "../../components/UI/Form/FormElement/FormElement";
import UserForm from "../../components/UI/Form/UserForm/UserForm";
import { createCocktail } from './../../store/actions/cocktailsActions';

const useStyles = makeStyles({
  flex: {
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  ingredient: {
    width: '20vw',
    margin: '10px'
  },
  addBtn: {
    margin: 10,
    display: 'block'
  }
});

const NewCocktail = () => {
  const classes = useStyles();
  const error = useSelector(state => state.cocktails.error);
  const dispatch = useDispatch();
  
  const [inputIngredients, setInputIngredients] = useState([
    { name: '', qty: '', id: nanoid() },
  ]);

  const [state, setState] = useState({
    name: '',
    image: '',
    recipe: '',
    ingredients: [
      {name: '', qty: ''}
    ]
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  };

  const fileChangeHandler = e => {
    const file = e.target.files[0];
    setState(prevState => {
      return {...prevState, image: file}
    })
  };

  const submitFormHandler = async e => {
    e.preventDefault();
    const formData = new FormData();
    buildFormData(formData, state);
    await dispatch(createCocktail(formData));
  };

  function buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
      formData.append(parentKey, value);
    }
  }

  const getFieldError = fieldName => {
    try {
      return error.errors[fieldName].message;
    } catch(e) {
      return undefined;
    }
  };

  const addIngredients = (e) => {
    const ingrCopy = [...inputIngredients];
    let newIngr = {name: '', qty: '', id: nanoid()};
    ingrCopy.push(newIngr);
    setInputIngredients(ingrCopy);
  };
  
  const ingredientsChangeHandler = (e, id) => {
    const ingrs = [...inputIngredients];
    const index = ingrs.findIndex(ing => ing.id === id);
    ingrs[index] = {...inputIngredients[index], [e.target.name]: e.target.value};
    setInputIngredients(ingrs);
    setState({...state, ingredients: ingrs});
  };

  const removeIngredient = (id) => {
    const ingCopy = [...inputIngredients];
    const index = inputIngredients.findIndex(ing => ing.id === id);
    ingCopy.splice(index, 1);
    setInputIngredients(ingCopy);
  };

  return (
    <UserForm 
      onSubmit={submitFormHandler}
      title='Add New Cocktail'
      icon={<LocalBarIcon />}
      maxWidth="md"
    >
      <FormElement 
        name='name'
        value={state.name}
        onChange={inputChangeHandler}
        error={getFieldError('name')}
        label='Name'
        type='text'
      />
      <div className={classes.flex}>
        {inputIngredients.map((ing, index) => {
          return <Ingredients
            key={index} 
            name={ing.name}
            qty={ing.qty}
            onChange={(e) => ingredientsChangeHandler(e, ing.id)}
            onDelete={() => removeIngredient(ing.id)}
          />
        })}
      </div> 
      <Button
        color="inherit"
        variant="outlined"
        className={classes.addBtn}
        onClick={addIngredients}
      >
        Add Ingredients
      </Button>
      <FormElement 
        name='recipe'
        value={state.recipe}
        onChange={inputChangeHandler}
        error={getFieldError('recipe')}
        label='Recipe'
        type='text'
        multiline
      />
      <FileInput 
        name="image"
        label="Image"
        onChange={fileChangeHandler}
      />
    </UserForm>
  )
};

export default NewCocktail;