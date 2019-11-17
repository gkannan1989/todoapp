import React, { memo } from "react";
import {TextField, Paper, Grid, Typography } from "@material-ui/core"; 
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddTodo = memo(props => (
  <> 
  {
    !props.isOpen ? 
      <Typography className='addToDoBtn' color="inherit">
        <Fab size="small"  color="primary" aria-label="add" onClick={props.openTodo}>
          <AddIcon />   
        </Fab>
        <Button color="primary" onClick={props.openTodo}>Add a to-do</Button> 
      </Typography> : 
         ( <Paper className="addToDo"> 
            <Grid container> 
              <Grid  className="grid" xs={10} md={11} item>
                <TextField
                  placeholder="Add Todo here"
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
                  Add
                </Button>
              </Grid>
          </Grid></Paper> ) 
  }  
  </>
));

AddTodo.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  openTodo: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onInputKeyPress: PropTypes.func.isRequired
};


export default AddTodo;
