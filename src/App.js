import React, { Component } from 'react';
import './App.css';

import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]
    })
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

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
