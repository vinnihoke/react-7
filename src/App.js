import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
  {
    task: "Test1",
    id: 12345,
    completed: false
  },
  {
    task: "Test2",
    id: 123456,
    completed: false
  },
  {
    task: "Test3",
    id: 1234567,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addTodo = (e, todoTask) => {
    e.preventDefault();
    const exists = this.state.todos.filter(todo => todo.task === todoTask);

    if (exists.length === 0) {
      const newTodo = {
        task: todoTask,
        id: Date.now(),
        completed: false
      };

      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleTodo}
        ></TodoList>
        <TodoForm
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        ></TodoForm>
      </div>
    );
  }
}

export default App;
