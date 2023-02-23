const router = require('express').Router()
const projectCtrl = require('../controllers/projects.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post("/", checkAuth, projectCtrl.create)


module.exports = router