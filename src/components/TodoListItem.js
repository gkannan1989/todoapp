import React, { memo, useState } from "react";
import { 
  ListItem,
  Checkbox,
  IconButton,
  ListItemText 
} from "@material-ui/core";
import { Delete } from '@material-ui/icons' 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
  root: {
    color: '#999',
    border: '0px',
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />); 

const TodoListItem = memo((props) => {
  const [show, showIcon] = useState(false); 
  return (
    <ListItem className={'listItem'} divider={props.divider} button >
       <FormControlLabel
          className={'greenCheckBox'}
          control={
            <GreenCheckbox 
              checked={props.checked}  
              onClick={props.onCheckBoxToggle}
            />
          } 
        /> 
      <ListItemText className={props.checked ? 'strikeThrough' : ''} primary={props.text} onMouseLeave={() => showIcon(false)} onMouseEnter={() => showIcon(true)} />
      {
        show ? (<IconButton  onMouseEnter={() => showIcon(true)} onMouseLeave={() => showIcon(false)}  color='primary' aria-label="Delete Todo" onClick={props.onButtonClick} >
          <Delete/>
        </IconButton>) : ''
      }    
    </ListItem>
  ) 
});

export default TodoListItem;
