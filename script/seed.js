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
        'https://live.staticflickr.com/65535/49776690363_558f2a8e14_b.jpg',
        'https://live.staticflickr.com/65535/49777223971_20987d6637_b.jpg',
        'https://live.staticflickr.com/65535/49776690338_7da643d7ee_b.jpg',
        'https://live.staticflickr.com/65535/49776690318_772cae8a2f_b.jpg',
        'https://live.staticflickr.com/65535/49777223936_e9d9e1dda7_b.jpg',
        'https://live.staticflickr.com/65535/49777223916_d20dc407ce_b.jpg'
      ],
      url: 'https://name-pending.herokuapp.com/'
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
        'https://live.staticflickr.com/65535/49789172723_ac12d68d95_b.jpg',
        'https://live.staticflickr.com/65535/49789172933_797ca5df15_b.jpg',
        'https://live.staticflickr.com/65535/49789717086_b16703a7ac_b.jpg',
        'https://live.staticflickr.com/65535/49790032552_a5a1cffd6e_b.jpg',
        'https://live.staticflickr.com/65535/49789173388_e92936b2ca_b.jpg'
      ],
      url: 'https://github.com/beccabryn/slotherapy'
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
        'https://live.staticflickr.com/65535/49777576082_714c266faa_b.jpg',
        'https://live.staticflickr.com/65535/49777251106_54c2214874_b.jpg',
        'https://live.staticflickr.com/65535/49776717093_bd630d17b8_b.jpg',
        'https://live.staticflickr.com/65535/49777251096_9872624893_b.jpg'
      ],
      url: 'http://hophoparray.com/'
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
