export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": 
      if (!action.payload) {
        return state;
      } 
      let text = action.payload;  
      return {
        ...state,
        todos: [...state.todos, {text, checked: false}]
      };
    case "COMPLETE": 
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (action.payload === index) {
            todo.checked = !todo.checked;
          } 
          return todo;
        })
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => action.payload !== index)
      };
    default:
      return state;
  }
}
