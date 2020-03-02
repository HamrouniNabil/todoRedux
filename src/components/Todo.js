import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo, deleteTodo, editTodo } from "../store/actions/action";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ""
    };
  }

  updateInput = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  addItem = e => {
    if(this.state.newItem){
    e.preventDefault();
    this.props.addTodo({
      title: this.state.newItem,
      id: Date.now(),
      isComplete: false
    });
  }else {
    alert("Please write something !!")
  }
  };

  render() {
    return (
      <div className="bigbloc">
        <h1 className="app-title">To-Do APP !</h1>
        <p className="app-title1">Add new To-Do</p>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.updateInput}
            className="input"
            placeholder="Enter a task here ..."
          />
          <button className="add-btn"> Add</button>
        </form>
        <div className="list">
          
          {this.props.todos.map(todo => (

            <div key={todo.id}>
              <ul>
              <li className={todo.isComplete ? "complete" : ""}>
                {todo.title}
                
                <button className="button1"
                  onClick={() => this.props.editTodo(todo.id)}
                  >
                  {!todo.isComplete ? "complete" : "undo"}
                </button>
                <button
                  className="button1"
                  onClick={() => this.props.deleteTodo(todo.id)}>
                  Delete
                </button>
              </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addtodo(todo)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
