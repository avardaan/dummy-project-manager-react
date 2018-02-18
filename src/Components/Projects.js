import React, { Component } from 'react';

import ProjectItem from './ProjectItem'

class Projects extends Component {
  // passing id to delete, 2 components up -> setState is CONVOLUTED
  deleteProject = (id) => {
    this.props.onDelete(id)
  }

  render() {
    let projectItems = null
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // map over each item of project array passed in as prop
        //console.log(project)
        return (
          <ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)} />
        )
      })
    }

    return (
      <div className="Projects">
        <h3> Latest Projects </h3>
        {projectItems}
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

export default Projects;
