const Sequelize = require('sequelize')
const db = require('../db')

const Projects = db.define('project', {
  id: {
    type: Sequelize.INTEGER,
    isUnique: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  stack: {
    type: Sequelize.TEXT
  },
  gallery: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Projects
