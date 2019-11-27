import React, { memo } from "react";
import PropTypes from 'prop-types';
import { List, Paper } from "@material-ui/core";
import TodoListItem from "./TodoListItem";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
/**
 * Function represents the TodoList component
 * @memberOf components.TodoList
 * @function TodoList
 * @description It renders the right block such as list porition along with banner 
 * @param {object}   props - props of component that were given by parent todo list and banner
 * @return {jsx} - jsx component to show 
 * @example
 *   <TodoList
      items={todos}
      onItemMark={idx => markTodo(idx)}
      onItemRemove={idx => removeTodo(idx)} 
      banner={bannerObj}
      />
 */
const TodoList = memo(props => (
  <>
   <GridList cellHeight={180} >
         <GridListTile cols={2} rows={1}>
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
              onCheckBoxToggle={() => props.onItemMark(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));
/**
 * @memberOf components.TodoList
 * @name propTypes
 * @type {object}
 * @description defines prop types of TodoList
 * @property {object}         [items]   -  todo list
 * @property {object}         [onItemMark]   -  invoking a function to mark the item as completed
 * @property {object}         [onItemRemove]   -  invoking a function to remove the list item
 * @property {object}         [banner]   -  banner object along with text and banner
 */
TodoList.propTypes = { 
  items: PropTypes.array.isRequired,
  onItemMark: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired,
  banner:  PropTypes.object.isRequired
};

export default TodoList;
