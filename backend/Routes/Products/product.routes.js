const router = require('express').Router();
const multer = require('multer');
const { productController } = require('./../../Controllers/index');
const verifyJwt = require('../../Middlewares/verify.jwt')
const upload = require('../../Middlewares/uploads');
// assign destination folder to store file that will be uploaded

router.post("/create-product", verifyJwt, upload.single('product_image'), productController.create_product);
router.get("/all", productController.get_all_products);
router.get("/product/:productId", productController.get_product_by_id);





module.exports = router; 