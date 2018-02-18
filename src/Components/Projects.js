import React, { Component } from 'react';

import ProjectItem from './ProjectItem'

class Projects extends Component {
  render() {
    let projectItems = null
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // map over each item of project array passed in as prop
        //console.log(project)
        return (
          <ProjectItem key={project.title} project={project} />
        )
      })
    }

    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
