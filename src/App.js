import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid'
import $ from 'jquery'

import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import Todos from './Components/Todos'

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos = () => {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ todos: data }, () => {
          // setState callback
          console.log(this.state)
        })
      },
      error: (xhr, status, err) => {
        console.log(err)
      }
    })
  }

  getProjects = () => {
    this.setState({
      projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]
    })

  }

  componentWillMount() {
    this.getProjects()
    this.getTodos()
  }

  componentDidMount() {
    this.getTodos()
  }

  // non-redux way of passing state between components! addProject={this.handleAddProject}
  // still runs in AddProject.js, NOT here. Function is passed as a first class object
  handleAddProject = (project) => {
    // get current list of projects
    let projects = this.state.projects
    // add new project
    projects.push(project)
    // update state
    this.setState({ projects: projects })
  }

  handleDeleteProject = (id) => {
    let projects = this.state.projects
    // find index returns the index of the element that matches
    // the function i.e. returns true from the condition function passed in
    let index = projects.findIndex(project => project.id === id)
    projects.splice(index, 1)
    this.setState({ projects })
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
