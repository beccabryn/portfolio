const router = require('express').Router()
const {Projects} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.findAll()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})
