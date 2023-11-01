const router = require('express').Router();
const multer = require('multer');
const { productController } = require('./../../Controllers/index');
const verifyJwt = require('../../Middlewares/verify.jwt')

// assign destination folder to store file that will be uploaded
const upload = multer({ dest: 'product_uploads' });

router.post("/create-product", verifyJwt, upload.single('file'), productController.create_product);
router.get("/all", verifyJwt, productController.get_all_products);
router.get("/product/:productId", verifyJwt, productController.get_product_by_id);




module.exports = router;