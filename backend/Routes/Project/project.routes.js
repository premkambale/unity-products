const router = require('express').Router();
const { projectController } = require('./../../Controllers/index');
const verifyJwt = require('../../Middlewares/verify.jwt')


router.post("/create-project", verifyJwt, projectController.create_project);
router.get("/all", verifyJwt, projectController.get_all_projects);
router.get("/project/:projectId", verifyJwt, projectController.get_project_by_id);


module.exports = router;