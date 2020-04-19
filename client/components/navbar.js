import React from 'react'

export default function Navbar() {
  const links = [
    <a className='links' href='https://github.com/beccabryn' target="_blank">Github</a>,
    <a className='links' href="https://www.linkedin.com/in/rebecca-duhamel-8052a4b3/" target="_blank">LinkedIn</a>,
    <a className='links' href='mailto:rduhamel9@gmail.com' target="_blank">Contact</a>
  ]
  const [navIsOpen, setNavIsOpen] = React.useState(false)

  return (
    <div>
      <nav>
        <div className="logo">
          <a href='/'>Rebecca Bryn</a>
        </div>
        <ul className={navIsOpen ? 'nav-active nav-links' : 'nav-links'}>
          {links.map((link, index) => (
            <li key={index}
              style={
                navIsOpen
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${index / 7 +
                        0.5}s`
                    }
                  : {}
              }
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          className={navIsOpen ? 'burger toggle' : 'burger'}
          onClick={() => {
            setNavIsOpen(!navIsOpen)
          }}
        >
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
      </nav>
    </div>
  )
}
