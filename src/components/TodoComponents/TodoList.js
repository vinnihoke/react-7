// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="todolist">
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleTodo={this.props.toggleTodo} />
        ))}
      </div>
    );
  }
}
