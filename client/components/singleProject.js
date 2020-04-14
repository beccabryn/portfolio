import React from 'react'
import {connect} from 'react-redux'
import {getSingleProject} from '../store/project'
/**
 * COMPONENT
 */
class SingleProject extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        project: {}
      })
  }
  componentDidMount(id) {
    this.props.getSingleProject(this.props.match.params.id)
  }

  render() {
    const project = this.props.project
    console.log('GOT HERE', this.props)

    return (
      <div className="project-wrapper">
        <div className="art-wrapper">
          <h1 className="project-title">{project.title}</h1>
        </div>
        <div className="details-wrapper">
          <h3 className="project-header">Role:</h3>
          <h4 className="project-text">{project.role}</h4>
          <br />
          <h3 className="project-header">Description:</h3>
          <h4 className="project-text">{project.description}</h4>
          <br />
          <h3 className="project-header">Stack:</h3>
          <h4 className="project-text">{project.stack}</h4>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  console.log(state)
  return {
    project: state.projects.project
  }
}

const mapDispatch = dispatch => ({
  getSingleProject: id => dispatch(getSingleProject(id))
})

export default connect(mapState, mapDispatch)(SingleProject)
