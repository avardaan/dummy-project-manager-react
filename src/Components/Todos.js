import React, { Component } from 'react';

import TodoItem from './TodoItem'

class Todos extends Component {

  render() {
    let todoItems = null
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        // map over each item of project array passed in as prop
        //console.log(project)
        return (
          <TodoItem key={todo.title} todo={todo} />
        )
      })
    }

    return (
      <div className="Todos">
        <h3> Todo List </h3>
        {todoItems}
      </div>
    );
  }
}

/*
// test to force props to be a certain type!!
Projects.propTypes = {
  projects: React.propTypes.array,
  onDelete: React.propTypes.func
}
*/

export default Todos;
