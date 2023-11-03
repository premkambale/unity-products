const router = require('express').Router();
const multer = require('multer');
const { productController } = require('./../../Controllers/index');
const verifyJwt = require('../../Middlewares/verify.jwt')
const { upload } = require("../../Middlewares/index");
const allFiles = require('express-formidable')
// assign destination folder to store file that will be uploaded
const { uploadProductImages, uploadProductPdf } = upload;



const productUploadFields = [
  { name: 'product_image', maxCount: 1000 },
  { name: 'product_doc', maxCount: 1000 }
]

router.post("/create-product",
  verifyJwt,
  uploadProductImages.fields(productUploadFields),
  // uploadProductPdf.single('product_doc'),
  productController.create_product
);

router.get("/all",
  productController.get_all_products
);
router.get("/product/:productId",
  productController.get_product_by_id
);
router.delete("/all",
  productController.delete_all_products
);
router.delete("/product/:productId",
  productController.delete_product_by_id
);

module.exports = router; 