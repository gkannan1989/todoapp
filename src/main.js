import "./css/styles.css";
import React, { memo, useContext, useState } from "react"; 
import Layout from "./components/Layout";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/es/styles';
import Store from '../src/store/context' 
import {constants} from './actions/constants'
import Notification from '../src/components/Notification'; 

const onTodoClick = (initialValue = false) => {
  const [isOpen, triggerOpen] = useState(initialValue); 
  return {
    isOpen,
    openTodo: () => triggerOpen(!isOpen) 
  };
};

const TodoApp = memo(() => {
  const { state, dispatch } = useContext(Store); 
  const { isOpen, openTodo } = onTodoClick();  
  const theme = createMuiTheme({
    typography: {
     "fontFamily": "Darwin-Bold" 
    }
  }); 
  const [todo, setTodo] = useState("");
  const [message, notifyMessage] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }
  const removeTodo = (idx) => {
    notifyMessage({"type": Constants.SUCCESS, "msg": Constants.TODO_REMOVED_MESSAGE}) 
    dispatch({ type: constants.DELETE, payload: idx });
  }
  const selectTodo = (idx) => {
    notifyMessage({"type": Constants.INFO, "msg": Constants.TODO_MARK_MESSAGE}) 
    dispatch({ type: constants.COMPLETE, payload: idx });
  }
  const handleTodoAdd = () => {
    if(todo != "") {
      dispatch({ type: constants.ADD_TODO, payload: todo });
      setTodo("");
      openTodo(false);
      notifyMessage({"type": Constants.SUCCESS, "msg": Constants.TODO_SUCCESS_MESSAGE})
    }
    else {
      notifyMessage({"type": Constants.ERROR, "msg": Constants.ERROR_MESSAGE})
    } 
  }
  
  const user =  {name: constants.USER_NAME, todo: constants.TODO_TXT}
  const banner =  {title: constants.BANNER_TITLE, subTitle: constants.BANNER_SUB_TITLE}
  
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
 
