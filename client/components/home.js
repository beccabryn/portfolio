import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import styled from 'styled-components'
/**
 * COMPONENT
 */
export default function Home() {
  let projectImg =
    'https://www.picturepaste.ca/images/2020/04/10/Projects-1.png'
  let resumeImg =
    'https://www.picturepaste.ca/images/2020/04/10/23211435af1afff78.png'
  let aboutImg = 'https://www.picturepaste.ca/images/2020/04/10/Projects-2.png'
  return (
    <div className="wrapper">
      <img
        src={projectImg}
        alt="Projects-1.png"
        onClick={() => (window.location.href = '/projects')}
        className="art"
      />
      <img
        src={resumeImg}
        alt="23211435af1afff78.png"
        onClick={() =>
          window.open(
            'https://docs.google.com/document/d/e/2PACX-1vTWUr4r-RIqWNA_i9jlTCPvAzmJ-ntMZefnMCxB4yvZr27iYtHulwg6Qr9KA3rGDgF9kQ0sltths2Rs/pub?embedded=true'
          )
        }
        className="art"
      />
      <img
        src={aboutImg}
        onClick={() => (window.location.href = '/about')}
        className="art"
      />
    </div>
  )
}
