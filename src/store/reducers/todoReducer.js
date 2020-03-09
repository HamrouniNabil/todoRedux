import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  SAVE_EDIT
} from "../type";

const initialState = {
  todos: []
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case COMPLETE_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        )
      };
    case EDIT_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, isEdited: true } : todo
        )
      };
    case SAVE_EDIT:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, desc: action.payload.desc,isEdited:false }
            : todo
        )
      };

    default:
      return state;
  }
};
export default todoReducer;
