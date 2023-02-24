const router = require('express').Router()
const projectCtrl = require('../controllers/projects.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


router.delete("/:projectId", projectCtrl.deleteProject)
/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post("/", checkAuth, projectCtrl.create)
router.get("/", checkAuth, projectCtrl.index)
router.get("/:projectId", checkAuth, projectCtrl.show)
router.put("/:projectId", checkAuth, projectCtrl.update)


module.exports = router