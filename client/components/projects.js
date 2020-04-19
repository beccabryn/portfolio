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
        src="https://live.staticflickr.com/65535/49777233901_740c0537bb_b.jpg"
        alt="5.png"
        className="art"
        onClick={() => (window.location.href = '/projects/3')}
      />
      <img
        src="https://live.staticflickr.com/65535/49776699808_457463d896_b.jpg"
        alt="Projects-3.png"
        className="art"
        onClick={() => (window.location.href = '/projects/2')}
      />
      <img
        src="https://live.staticflickr.com/65535/49776699833_923e628d51_b.jpg"
        alt="6.png"
        className="art"
        onClick={() => (window.location.href = '/projects/1')}
      />
    </div>
  )
}
