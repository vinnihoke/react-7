import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoTask: ""
    };
  }

  handleChanges = e => {
    this.setState({ todoTask: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.todoTask !== "" && this.props.addTodo(e, this.state.todoTask);

    // This is the form reset
    this.setState({ todoTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.todoTask}
          onChange={this.handleChanges}
        />
        <button type="submit">Add Task</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
