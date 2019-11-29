# Interactive React Responsive Todo App

This todo app allows user to add new todo, remove todo, mark completed todo, view todos and interactive UI with Material UI, adding to that it also has persistance of the todo list(stored in local storage). 

## Tech Stack
1. React
2. React hooks (useState, useReducer, useContext and useEffect)
3. Material UI 
4. Custom hooks(useEffect) for usePersistedContext
5. Jest, Enzyme - Functional, Component and Snapshot based testing

## Demo 
https://app-todo-list-items.herokuapp.com/

## Install
````
Step 1: npm install
Step 2: npm run start
````
## Testing
Step 1: npm run test

## Principles
ATOMIC design

## Folder Structure
### Atom 
  Material UI provides ATOM level components(Button, Input, Text, List, CheckBox.. etc)
  
### Molecules 
````
  src/components/AddTodo.js 
  src/components/Notification.js
  src/components/TodoList.js
  src/components/TodoListItem.js
````

### Template
````
  src/components/Layout.js
````

### Pages / Containers
````
  src/pages/todo.js
  src/pages/todo.css
````

### Constants
````
   src/constants/constants.js
````

### Store
````
  src/store/context.js
  src/store/reducer.js
  src/store/usePersist.js
````

### Util / Helpers
````
  src/util/utils.js
````

### Assets - Font / image 
````
  src/assets/font/eot/*
  src/assets/font/otf/*
  src/assets/font/ttf/*
  src/assets/font/svg/*
  src/assets/font/woff/*
  src/assets/font/woff2/*
  src/assets/img/*
````


