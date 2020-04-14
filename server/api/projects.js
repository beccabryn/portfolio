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

router.get('/:id', async (req, res, next) => {
  try {
    const project = await Projects.findByPk(req.params.id)
    res.json(project)
  } catch (err) {
    next(err)
  }
})
