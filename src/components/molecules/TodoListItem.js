import React, { memo, useState } from "react";
import { 
  ListItem,
  Checkbox,
  IconButton,
  ListItemText 
} from "@material-ui/core";
import PropTypes from 'prop-types'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles'; 
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Constants as C } from '../../constants/constants'
/**
 * 
 */
const GreenCheckbox = withStyles({
  root: {
    color: '#0000000d',
    border: '0px 0px', 
    '&$checked': {
      color: '#19ad20b5',
      padding: '0'
    } 
  },
  checked: {},
})(props => <Checkbox color="default" {...props} 
            icon={<CheckBoxOutlineBlankIcon className="checkboxOutline" style={{ border: '2px ridge #0000001c', borderRadius: ".2em", background: '#ffff'}} />}
            checkedIcon={<CheckBoxIcon style={{ width: '1.5em', height: '1.5em', padding: '5px'}}/>} 
/>); 

/**
 * Function represents the TodoListItem component
 * @memberOf components.TodoListItem
 * @function TodoListItem
 * @description It renders list block with items  
 * @param {object}   props - props of component that were given by parent todo list and banner
 * @return {jsx} - jsx component to show 
 * @example
 *    <TodoListItem
        {...todo} 
        divider={idx !== props.items.length - 1}
        onButtonClick={props.onItemRemove(idx)}
        onCheckBoxToggle={props.onItemMark(idx)}
      />
 */
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
          <SvgIcon viewBox="0 0 21 23">
            <path d={C.TRASH_SVG_PATH}/>
            </SvgIcon>
        </IconButton>) : ''
      }    
    </ListItem>
  ) 
});
/**
 * @memberOf components.TodoListItem
 * @name propTypes
 * @type {object}
 * @description defines prop types of TodoListItem
 * @property {bool}         [divider]   -  determine the divider of each item
 * @property {func}         [onButtonClick]   -  invoking a function to remove the list item
 * @property {func}         [onCheckBoxToggle]   -  invoking a function to mark the item as completed
 */
TodoListItem.propTypes = {  
  divider: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onCheckBoxToggle:  PropTypes.func.isRequired
};

export default TodoListItem;
