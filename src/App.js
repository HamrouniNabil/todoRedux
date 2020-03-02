import React from "react";
import { Provider } from "react-redux";
import Todo from "./components/Todo";
import store from "./store/CreateStore";
import "./App.css";

function App() {
  return(
  <Provider store={store}>
    <div className="App"> <Todo /></div>
  </Provider>
  );
}

export default App;
