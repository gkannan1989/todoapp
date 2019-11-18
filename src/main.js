import "./css/styles.css";
import React, { memo, useContext, useState, Suspense, lazy } from "react";   
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/es/styles';
import Store from '../src/store/context' 
import { Constants as C } from './constants/constants' 
import { TodoHelper as H } from './util/utils'; 
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList'; 
const Notification = lazy(() => import('../src/components/Notification'));   
 
const onTodoClick = (initialValue = false) => {
  const [isOpen, triggerOpen] = useState(initialValue); 
  return {
    isOpen,
    openTodo: () => triggerOpen(!isOpen) 
  };
};

const customTheme = createMuiTheme({
  typography: {
   "fontFamily": C.DEFAULT_THEME_FONT 
  }
}); 

const TodoApp = memo(() => {
  const { state, dispatch } = useContext(Store); 
  const [ todo, setTodo ] = useState("");
  const [ message, notify ] = useState("");
  const { isOpen, openTodo } = onTodoClick();  

  const handleTodoChange = (e) => {
    setTodo(e && e.target && e.target.value);
  }

  const removeTodo = (idx) => { 
    dispatch({ type: C.DELETE, payload: idx });
    notify({"type": C.WARNING, "msg": C.TODO_REMOVED_MESSAGE}) 
  }

  const markTodo = (idx) => {  
    dispatch({ type: C.COMPLETE, payload: idx });
    notify({"type": C.INFO, "msg": C.TODO_MARK_MESSAGE}) 
  }

  const handleTodoAdd = () => {
    if(H.handleInput(todo)) {
      dispatch({ type: C.ADD_TODO, payload: todo });
      setTodo("");
      openTodo(false);
      notify({"type": C.SUCCESS, "msg": C.TODO_SUCCESS_MESSAGE})
    }
    else {
      notify({"type": C.ERROR, "msg": C.ERROR_MESSAGE})
    }  
  }

  const handleKeyPressEvent = (ev) => {
    if(H.handleKeyPress(ev)) {
      handleTodoAdd();
    } else {
      return false
    }
  }
   
  return (
  <div className={'wrapper'}>
      <MuiThemeProvider theme={customTheme}> 
        <Layout user={C.USER_OBJ}> 
          <TodoList
              items={state && state.todos}
              onItemCheck={idx => markTodo(idx)}
              onItemRemove={idx => removeTodo(idx)} 
              banner={C.BANNER_OBJ}
          />
          <AddTodo
            inputValue={todo}
            onInputChange={handleTodoChange}
            onButtonClick={handleTodoAdd}
            openTodo={() => openTodo()}
            isOpen={isOpen}
            onInputKeyPress={ev => handleKeyPressEvent(ev)}
          /> 
          {message ? 
            <Suspense fallback={<div>loading</div>}>
                <Notification
                  variant={message && message.type} 
                  onClose={() => notify("")}
                  message={message.msg}
              />
              </Suspense>
            : 
            ''
          }
          
     </Layout>
     </MuiThemeProvider>
  </div>
  );
}); 


export default TodoApp;
 
