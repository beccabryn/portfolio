import React from 'react'

export default function Home() {
  let projectImg =
    'https://live.staticflickr.com/65535/49777242911_2199361ce1_b.jpg'
  let resumeImg =
    'https://live.staticflickr.com/65535/49777243476_4b2f1527e4_b.jpg'
  let aboutImg = 'https://live.staticflickr.com/65535/49777242886_3fd5830022_b.jpg'
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
