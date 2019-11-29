import React, { memo } from "react";
import {TextField, Paper, Grid, Typography } from "@material-ui/core"; 
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Constants as C } from  '../../constants/constants';
/**
 * Function represents the AddTodo component
 * @memberOf components.AddTodo
 * @function AddTodo
 * @description It render the add to do with plus icon,
 * when tapping text block with addtodo button will appear
 * @param {object}   props     - props of component that were given by parent
 * @return {jsx} - jsx component to show 
 * @example
 * <AddTodo
    inputValue={todo}
    onInputChange={handleTodoChange}
    onButtonClick={handleTodoAdd}
    openTodo={() => openTodo()}
    isOpen={isOpen}
    onInputKeyPress={ev => handleKeyPressEvent(ev)}
    />
 */
const AddTodo = memo(props => (
  <> 
  {
    !props.isOpen ? 
      <Typography className='addToDoBtn' color="inherit">
        <Fab size="small"  color="primary" aria-label="add" onClick={props.openTodo}>
          <AddIcon />   
        </Fab>
        <Button color="primary" onClick={props.openTodo}>{C.ADD_TODO_BTN}</Button> 
      </Typography> : 
         ( <Paper className="addToDo"> 
            <Grid container> 
              <Grid  className="grid" xs={10} md={11} item>
                <TextField
                  placeholder={C.TODO_PLACEHOLDER}
                  value={props.inputValue}
                  onChange={props.onInputChange}
                  onKeyPress={props.onInputKeyPress}
                  fullWidth
                />
              </Grid>
              <Grid xs={2} md={1} item>
                <Button
                  className={'addBtn'}
                  fullWidth
                  color="secondary"
                  variant="outlined"
                  onClick={props.onButtonClick}
                >
                  {C.ADD_BTN_TEXT}
                </Button>
              </Grid>
          </Grid></Paper> ) 
  }  
  </>
));

/**
 * @memberOf components.AddTodo
 * @name propTypes
 * @type {object}
 * @description defines prop types of AddTodo
 * @property {string}         [inputValue]          -  input string on the addtodo input box
 * @property {function}         [onInputChange]      -  function to handle during inputchange
 * @property {function}        [onButtonClick]     -  function to handle on clicking addtodo button
 * @property {function}         [openTodo]          -  function to handle on todo plus button
 * @property {boolean}         [isOpen]      -  boolean to determine whether to open todo input box or not
 * @property {function}        [onInputKeyPress]     - function to handle on keyboard enter
 */
AddTodo.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  openTodo: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onInputKeyPress: PropTypes.func.isRequired
};


export default AddTodo;
