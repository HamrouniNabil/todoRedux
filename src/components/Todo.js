import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, completeTodo, editTodo,saveEdit } from "../store/actions/action";

class Todo extends Component {
  state = {
    editInput: this.props.todo.desc
  };
  changeHandler = e => this.setState({ editInput: e.target.value });
  render() {
    return (
      <div>
        <button onClick={() => this.props.completeToDo(this.props.todo.id)}>
          {this.props.isComplete ? "UNDO" : "COMLETE"}
        </button>
        <button
          onClick={() => {
            this.props.editToDo(this.props.todo.id);
          }}
        >
          {this.props.isEdited}
          EDIT
        </button>
        <button onClick={() => this.props.delete(this.props.todo.id)}>
          DELETE
        </button>
        {this.props.todo.isEdited ? (
          <>
            <input
              type="text"
              defaultValue={this.props.todo.desc}
              onChange={e => this.changeHandler(e)}
            />
            <button
              onClick={() =>
                this.props.saveEdit({
                  id: this.props.todo.id,
                  desc: this.state.editInput
                })
              }
            >
              Save
            </button>
          </>
        ) : (
          <span className={this.props.todo.isComplete && "complete"}>
            {this.props.todo.desc}
          </span>
        )}
      </div>
    );
  }
}

const MDTP = dispatch => ({
  delete: id => dispatch(deleteTodo(id)),
  completeToDo: id => dispatch(completeTodo(id)),
  editToDo: id => dispatch(editTodo(id)),
  saveEdit: editedTask => dispatch(saveEdit(editedTask))
});
export default connect(null, MDTP)(Todo);
