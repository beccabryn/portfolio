'use strict'

const db = require('../server/db')
const {Projects} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const projects = await Promise.all([
    Projects.create({
      id: 1,
      title: 'Name-Pending',
      role: 'Fullstack Developer',
      description:
        'During the Grace Hopper Program, we were assigned groups and were tasked to create an ecommerce site. We chose to sell prints. I designed the schema and front-end, wrote api routes and different React components.',
      stack:
        'This website was developed with Node.js, Postgres, Express, React, and Redux, and deployed on Heroku',
      gallery: [
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.28.56-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.29.15-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.30.33-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.30.48-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.30.56-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.31.27-PM.png'
      ]
    }),
    Projects.create({
      id: 2,
      title: 'Slotherapy',
      role: 'Sole Fullstack Developer',
      description:
        'With only a weekend to build a fully functional application, I chose to create Slotherapy: a notifications app that reminds 9-5 desk workers to take regular breaks.',
      stack:
        'This website was developed with Node.js, Postgres, Express, React, Redux, and NotificationsAPI',
      gallery: [
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.28.56-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.29.15-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.30.33-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.30.48-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.30.56-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-8.31.27-PM.png'
      ]
    }),
    Projects.create({
      id: 3,
      title: '[Hop Hop] Array',
      role: 'Fullstack Developer',
      description:
        '[Hop Hop] Array is a web application for practicing coding algorithms. Users attempt to submit code to be run against test specs, as well as gain points and experience levels for correct solutions.',
      stack:
        'The application implements the NERDS (Node, Express, React, Database using SQL) stack. Each technology was specifically selected to complement and enhance the web application.',
      gallery: [
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-9.20.44-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-9.20.57-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-9.21.04-PM.png',
        'https://www.picturepaste.ca/images/2020/04/11/Screen-Shot-2020-04-11-at-9.23.27-PM.png'
      ]
    })
  ])

  console.log(`seeded ${projects.length} projects`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
