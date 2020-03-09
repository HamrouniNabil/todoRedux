import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo } from "../store/actions/action";

class UserInput extends Component {
  state = {
    newItem: ""
  };
  onChangeHandler = e =>
    this.setState({
      newItem: e.target.value
    });
  handleAdd = e => {
    e.preventDefault();
    this.props.addTodo({
      id: Date.now(),
      desc: this.state.newItem,
      isComplete: false,
      isEdited:false
    });
  };
  render() {
    return (
      <div className="bigbloc">
        <h1 className="app-title">To-Do APP !</h1>
        <p className="app-title1">Add new To-Do</p>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            onChange={this.onChangeHandler}
            className="input"
            placeholder="Enter a task here ..."
          />
          <button className="add-btn" onClick={e=>this.handleAdd(e)}>
            {" "}
            Add
          </button>
        </form>
      </div>
    );
  }
}
const MDTP = dispatch => ({
  addTodo: newItem => dispatch(addtodo(newItem))
});
export default connect(null, MDTP)(UserInput);
