import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'
/**
 * COMPONENT
 */
export default function Projects() {
  return (
    <div className="wrapper">
      <img
        src="https://www.picturepaste.ca/images/2020/04/11/5.png"
        alt="5.png"
        className="art"
      />

      <img
        src="https://www.picturepaste.ca/images/2020/04/11/Projects-3.png"
        alt="Projects-3.png"
        className="art"
      />

      <img
        src="https://www.picturepaste.ca/images/2020/04/11/6.png"
        alt="6.png"
        className="art"
      />
    </div>
  )
}
