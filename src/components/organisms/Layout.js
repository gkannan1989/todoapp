import React, { memo } from "react";
import { Button, Paper, Grid, Typography } from "@material-ui/core"; 
import PropTypes from 'prop-types';
import userImg from '../../assets/img/userimage.png';
import listIcon from '../../assets/img/list-ico.png';
/**
 * Function represents the Layout component
 * @memberOf components.Layout
 * @function Layout
 * @description It seperates the layout, user block and todo block 
 * @param {object}   props - props of component that were given by parent todo block and list
 * @return {jsx} - jsx component to show 
 * @example
 *  <Layout user={userObj}>  
    <AddTodo
        inputValue={todo}
        onInputChange={handleTodoChange}
        onButtonClick={handleTodoAdd}
        openTodo={openTodo}
        isOpen={isOpen}
        onInputKeyPress={handleKeyPressEvent}
      />
      <TodoList
        items={todosList}
        onItemMark={markTodo}
        onItemRemove={removeTodo} 
        banner={bannerObj}
      />   
      } 
     </Layout> 
 */
const Layout = memo(props => (
  <Paper
    elevation={0}
    className={"paperRightSide"} 
  > 
    <Grid container spacing={0}>
        <Grid className="userBlock" item xs={12} sm={3}>
           <Paper className="rightSideBar"> 
              <Typography> 
                <Button className={'userIcons'}>
                  <img className={'userImg'} src={userImg} alt={"userpicture"}/>
                  &nbsp;{props.user && props.user.name}
                </Button>
              </Typography>
              <Typography className={'wrapperIcons'}> 
                <Button className={'userIcons TodoIcon'}>
                <img className={'userImg'} src={listIcon} alt={'list icon'}/>
                  &nbsp;{props.user && props.user.todo}
                </Button>
              </Typography>
           </Paper>
        </Grid>
        <Grid className="listBlock" item xs={12} sm={9}> 
          {props.children} 
        </Grid>
      </Grid>
    
  </Paper>
));
/**
 * @memberOf components.Layout
 * @name propTypes
 * @type {object}
 * @description defines prop types of AddTodo
 * @property {object}         [user]   -  user name, todo text on the left panel
 */
Layout.propTypes = {
  user: PropTypes.object.isRequired
};

export default Layout;
