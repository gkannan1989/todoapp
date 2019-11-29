import React, { memo, useContext, useState, Suspense, lazy } from "react";   
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/es/styles';
import Store from '../store/context' 
import { Constants as C } from '../constants/constants' 
import { TodoHelper as H } from '../util/utils'; 
import Layout from '../components/organisms/Layout';
import AddTodo from '../components/molecules/AddTodo';
import TodoList from '../components/molecules/TodoList'; 
const Notification = lazy(() => import('../components/molecules/Notification'));   

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
/**
 * Function represents the TodoApp component
 * @memberOf main.TodoApp
 * @function TodoApp
 * @description It renders whole todo app and its the parent of all the component
 * @param {object}   props - props of component that were given by parent 
 * @return {jsx} - jsx component to show 
 * @example
 *    <TodoApp />
 */
const TodoApp = memo(() => {
  const { state, dispatch } = useContext(Store); 
  const [ todo, setTodo ] = useState("");
  const [ message, notify ] = useState("");
  const { isOpen, openTodo } = onTodoClick();  

  const handleTodoChange = (e) => {
    /**update the string to current state*/
    setTodo(e && e.target && e.target.value);
  }

  const removeTodo = (idx) => { 
    /**dispatch delete event along with the index*/
    dispatch({ type: C.DELETE, payload: idx });
    /**trigger notification to the end user*/
    notify({"type": C.WARNING, "msg": C.TODO_REMOVED_MESSAGE}) 
  }

  const markTodo = (idx) => {  
    /**dispatch completed/mark event along with the index*/
    dispatch({ type: C.COMPLETE, payload: idx });
    /**trigger notification to the end user*/
    notify({"type": C.INFO, "msg": C.TODO_MARK_MESSAGE}) 
  }

  const handleTodoAdd = () => {
    if(H.handleInput(todo)) {
      /**dispatch add todo event along with the string*/
      dispatch({ type: C.ADD_TODO, payload: todo });
      /**empty the addtodo block*/
      setTodo(""); 
      /**toggling the todo text block*/
      openTodo(false);
      /**trigger notification to the end user*/
      notify({"type": C.SUCCESS, "msg": C.TODO_SUCCESS_MESSAGE})
    }
    else {
      /**trigger notification to the end user*/
      notify({"type": C.ERROR, "msg": C.ERROR_MESSAGE})
    }  
  } 

  const handleKeyPressEvent = (ev) => {
    /**handle keypress event based on the keyboard key */
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
              onItemMark={idx => markTodo(idx)}
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
              <Suspense fallback={<div></div>}>
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
 
