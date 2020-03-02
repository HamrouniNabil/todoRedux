import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../type";
export const addtodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};
export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id
  };
};
