
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
});

const OrderingForm = (props) => {
  const { classes, onChange, ordering, orderings } = props;
  const { value } = ordering;

  const menus = orderings.map(o => {
    return <MenuItem value={o.value}>{o.name}</MenuItem>
  });

  const handleChange = (event) => {
    const { value } = event.target;
    const found = orderings.find(o => value === o.value);
    if (found)
      onChange(found);
  };

  return <FormControl className={classes.formControl}>
    <InputLabel shrink id="ordering-label">
      sortieren nach
    </InputLabel>
    <Select
      labelId="demo-simple-select-placeholder-label-label"
      id="demo-simple-select-placeholder-label"
      value={value}
      onChange={handleChange}
    >
      {menus}
    </Select>
  </FormControl>
};

export default withStyles(styles)(OrderingForm);
