const router = require('express').Router();
const multer = require('multer');
const { blogController } = require('./../../Controllers/index');
const { verifyJwt } = require('../../Middlewares/')
const { upload } = require("../../Middlewares/index");
const allFiles = require('express-formidable')
// assign destination folder to store file that will be uploaded
const { uploadBlogImages } = upload;



const blogUploadFields = [
  { name: 'blog_image', maxCount: 1000 },
]


router.post("/create-blog", verifyJwt, uploadBlogImages.fields(blogUploadFields), blogController.create_blog);

router.get("/all", blogController.get_all_blogs);
router.get("/blog/:blogId", blogController.get_blog_by_id);

router.delete("/all", blogController.delete_all_blogs);
router.delete("/blog/:blogId", blogController.delete_blog_by_id);

router.put("/blog/:blogId", verifyJwt, uploadBlogImages.fields(blogUploadFields), blogController.update_blog)

module.exports = router; 