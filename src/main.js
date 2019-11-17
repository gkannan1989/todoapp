import "./css/styles.css";
import React, { memo, useContext, useState } from "react";  
import Layout from "./components/Layout";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/es/styles';
import Store from '../src/store/context' 
import {Constants} from './constants/constants'
import Notification from '../src/components/Notification'; 
 
const onTodoClick = (initialValue = false) => {
  const [isOpen, triggerOpen] = useState(initialValue); 
  return {
    isOpen,
    openTodo: () => triggerOpen(!isOpen) 
  };
};

const theme = createMuiTheme({
  typography: {
   "fontFamily": "Darwin-Bold" 
  }
}); 

const TodoApp = memo(() => {
  const { state, dispatch } = useContext(Store); 
  const { isOpen, openTodo } = onTodoClick();  

  const [todo, setTodo] = useState("");
  const [message, notifyMessage] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  const removeTodo = (idx) => { 
    dispatch({ type: Constants.DELETE, payload: idx });
    notifyMessage({"type": Constants.WARNING, "msg": Constants.TODO_REMOVED_MESSAGE}) 
  }

  const selectTodo = (idx) => {  
    dispatch({ type: Constants.COMPLETE, payload: idx });
    notifyMessage({"type": Constants.INFO, "msg": Constants.TODO_MARK_MESSAGE}) 
  }

  const handleTodoAdd = () => {
    if(todo !== "") {
      dispatch({ type: Constants.ADD_TODO, payload: todo });
      setTodo("");
      openTodo(false);
      notifyMessage({"type": Constants.SUCCESS, "msg": Constants.TODO_SUCCESS_MESSAGE})
    }
    else {
      notifyMessage({"type": Constants.ERROR, "msg": Constants.ERROR_MESSAGE})
    }  
  }

  const user =  {name: Constants.USER_NAME, todo: Constants.TODO_TXT}
  const banner =  {title: Constants.BANNER_TITLE, subTitle: Constants.BANNER_SUB_TITLE}
  
  const handleToAddKeyPress = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      handleTodoAdd()
      return true;
    }
    return false;
  }
   
  return (
  <div className={'wrapper'}>
   <MuiThemeProvider theme={theme}>
    <Layout user={user}> 
      <TodoList
        items={state && state.todos}
        onItemCheck={idx => selectTodo(idx)}
        onItemRemove={idx => removeTodo(idx)} 
        banner={banner}
      />
      <AddTodo
        inputValue={todo}
        onInputChange={handleTodoChange}
        onButtonClick={handleTodoAdd}
        openTodo={() => openTodo()}
        isOpen={isOpen}
        onInputKeyPress={event => handleToAddKeyPress(event)}
      /> 
      {message ? 
        <Notification
          variant={message && message.type} 
          onClose={() => notifyMessage("")}
          message={message.msg}
        /> : 
        ''
      }
      
     </Layout>
     </MuiThemeProvider>
  </div>
  );
}); 


export default TodoApp;
 
