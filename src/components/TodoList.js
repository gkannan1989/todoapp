import React, { memo } from "react";
import { List, Paper } from "@material-ui/core";
import TodoListItem from "./TodoListItem";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import image from '../assets/img/todo-background.png';

const TodoList = memo(props => (
  <>
   <GridList cellHeight={180} >
         <GridListTile cols={2} rows={1}>
            <img src={image} alt={props.banner && props.banner.title} />
            <GridListTileBar
              title={props.banner && props.banner.title}
              subtitle={props.banner && props.banner.subTitle}
              titlePosition="bottom" 
              actionPosition="left" 
            />
          </GridListTile> 
    </GridList>  
    
    {props.items && props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: "none" }}>
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TodoList;
