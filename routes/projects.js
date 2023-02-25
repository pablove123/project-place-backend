const router = require('express').Router()
const projectCtrl = require('../controllers/projects.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


router.delete("/:projectName", projectCtrl.deleteProject)
router.get("/", projectCtrl.index)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post("/", checkAuth, projectCtrl.create)
router.get("/:projectId", checkAuth, projectCtrl.show)
router.put("/:projectId", checkAuth, projectCtrl.update)
router.put("/:projectId/addphoto", checkAuth, projectCtrl.addPhoto)


module.exports = router