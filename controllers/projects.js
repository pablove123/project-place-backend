const { Project } = require('../models')

async function create(req,res){
  try {
    req.body.profileId = req.user.profile.id
    const project = await Project.create(req.body)
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}
async function index(req,res){
  try {
    const projects = await Project.findAll()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}
async function show(req,res){
  try {
    const project = await Project.findByPk(req.params.projectId)
    // project.name = req.body.name
    // project.save()
      res.status(200).json(project)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}
async function deleteProject(req,res){
  try {
    const project = await Project.findByPk(req.params.projectId)
    await project.destroy()
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}
async function update(req,res){
  try {
    const project = await Project.findByPk(req.params.projectId)
    project.name = req.body.name
    // project.save()
    project.github = req.body.github
    project.app = req.body.app
    project.picture = req.body.picture
    project.save()
    res.status(200).json(project)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
  index,
  update, 
  deleteProject,
  show
}