import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";

export const ListOfIngredients = (props) => {
  return (
    <ListItem>
      <ListItemText style={{ padding: 0, margin: 0, textTransform: 'capitalize' }}>{props.name} - {props.qty}</ListItemText>
    </ListItem>
  )
};