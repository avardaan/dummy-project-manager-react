import React, { Component } from 'react';
import uuid from 'uuid'


class AddProject extends Component {

  constructor() {
    super()
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: [
      'Web Design', 'Web Development', 'Mobile Development'
    ]
  }

  handleSubmit = (e) => {
    const { title, category } = this.refs

    if (title.value === '') {
      alert('Title is required')
    }
    else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: title.value,
          category: category.value
        }
      }, () => {
        // this is setState callback function, prop passed from App.js
        this.props.addProject(this.state.newProject)
      })
    }
    e.preventDefault()
  }


  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}> {category} </option>
    })

    return (
      <div>
        <h3> Add Project </h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Title </label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label> Category </label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

export default AddProject;
