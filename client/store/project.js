const axios = require('axios')

/** INIT **/

const initalState = {
  projects: [],
  project: {}
}

/** ACTIONS **/

export const GOT_PROJECTS = 'GOT_PROJECTS'
export const GOT_SINGLE_PROJECT = 'GOT_SINGLE_PROJECT'
export const FAILED_TO_GET_PROJECTS = 'FAILED_TO_GET_PROJECTS'

/** ACTION CREATORS **/

export const gotProjects = projects => ({type: GOT_PROJECTS, projects})
export const gotSingleProject = project => ({type: GOT_SINGLE_PROJECT, project})
export const failedToGetProjects = error => ({
  type: FAILED_TO_GET_PROJECTS,
  error
})

/** THUNKS **/

export const getProjects = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/projects')
      const action = gotProjects(res.data)
      dispatch(action)
    } catch (err) {
      dispatch(failedToGetProjects(err))
    }
  }
}

export const getSingleProject = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/projects/${id}`)
      const action = gotSingleProject(res.data)
      dispatch(action)
    } catch (err) {
      dispatch(failedToGetProjects(err))
    }
  }
}

/** REDUCER  **/

export default function(state = initalState, action) {
  switch (action.type) {
    case GOT_PROJECTS:
      return {...state, projects: action.projects}
    case GOT_SINGLE_PROJECT:
      return {...state, project: action.project}
    case FAILED_TO_GET_PROJECTS:
      return action.error
    default:
      return state
  }
}
