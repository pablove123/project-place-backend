const { Project } = require('../models')

async function create(req,res){
  try {
    req.body.profileId = req.user.profile.id
    const project = await Project.create(req.body)
    res.status(200).json(project)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
async function index(req,res){
  try {
    
  } catch (error) {
    
  }
}
async function update(req,res){
  try {
    
  } catch (error) {
    
  }
}

module.exports = {
  create,
  index,
  update
}