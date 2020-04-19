import React from 'react'
import {connect} from 'react-redux'
import {getSingleProject} from '../store/project'
// import SimpleImageSlider from 'react-simple-image-slider'
import styled from 'styled-components'

/**
 * COMPONENT
 */
class SingleProject extends React.Component {
  constructor(props) {
    super(props),
      (this.state = {
        project: {},
      })
  }
  componentDidMount(id) {
    this.props.getSingleProject(this.props.match.params.id)
  }

  render() {
    const project = this.props.project
    let images = []
    if (project.gallery) {
      images = project.gallery.map((img) => ({url: img}))
    }
    return (
      <div className="project-wrapper">
        <div className="art-wrapper">
          <a href={project.url} target="_blank" className="title">{project.title}</a>
        </div>
        <div className="details-wrapper">
          <p class="popout">
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>E</span>
            <span>:</span>
          </p>
          <h4 className="text">{project.role}</h4>
          <br />
          <p class="popout">
            <span>D</span>
            <span>E</span>
            <span>S</span>
            <span>C</span>
            <span>R</span>
            <span>I</span>
            <span>P</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
            <span>:</span>
          </p>
          <h4 className="text">{project.description}</h4>
          <br />
          <p class="popout">
            <span>S</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
            <span>:</span>
          </p>
          <h4 className="text">{project.stack}</h4>
          <br />
          <p class="popout">
            <span>G</span>
            <span>A</span>
            <span>L</span>
            <span>L</span>
            <span>E</span>
            <span>R</span>
            <span>Y</span>
            <span>:</span>
          </p>
          <h4 className="text">(Scroll Through)</h4>
          <br />
        </div>
        {project.gallery ? (
          <Wrapper className="screenshots">
            {project.gallery.map((img) => {
              return <img className="project-gallery" src={img} />
            })}
            <Spacer />
          </Wrapper>
        ) : null}
      </div>
    )
  }
}

const mapState = (state) => {
  console.log(state)
  return {
    project: state.projects.project,
  }
}

const mapDispatch = (dispatch) => ({
  getSingleProject: (id) => dispatch(getSingleProject(id)),
})

export default connect(mapState, mapDispatch)(SingleProject)

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 -4vw;
  padding: 0 4vw 2rem 4vw;
  box-sizing: border-box;
`
const Spacer = styled.div`
  content: '';
  flex: 0 0 4vw;
`
