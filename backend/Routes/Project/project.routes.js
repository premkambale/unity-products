const router = require('express').Router();
const multer = require('multer');
const { projectController } = require('./../../Controllers/index');
const { verifyJwt } = require('../../Middlewares/')
const { upload } = require("../../Middlewares/index");
const allFiles = require('express-formidable')
// assign destination folder to store file that will be uploaded
const { uploadProjectImages } = upload;



const projectUploadFields = [
  { name: 'project_image', maxCount: 1000 },
]


router.post("/create-project", verifyJwt, uploadProjectImages.fields(projectUploadFields), projectController.create_project);

router.get("/all", projectController.get_all_projects);
router.get("/project/:projectId", projectController.get_project_by_id);

router.delete("/all", projectController.delete_all_projects);
router.delete("/project/:projectId", projectController.delete_project_by_id);

router.put("/project/:projectId", verifyJwt, uploadProjectImages.fields(projectUploadFields), projectController.update_project)

module.exports = router; 
