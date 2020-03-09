import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((el, key) => (
        <Todo todo={el} key={key} />
      ))}
    </div>
  );
};
const MSTP = state => ({
  todoList: state.todos
});
export default connect(MSTP)(TodoList);
