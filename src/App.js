import React from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <UserInput />
      <TodoList />
    </div>
  );
};

export default App;
