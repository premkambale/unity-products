const router = require('express').Router();
const multer = require('multer');
const { productController } = require('./../../Controllers/index');
const { verifyJwt } = require('../../Middlewares/')
const { upload } = require("../../Middlewares/index");
const allFiles = require('express-formidable')
// assign destination folder to store file that will be uploaded
const { uploadProductImages, uploadProductPdf } = upload;



const checkReq = (req, res, next) => {
  const body = req.body;
  const file = req.files;
  console.log("body:", body)
  console.log("file===========:", { file })
  // next();
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------

router.post("/create-product",
  verifyJwt,
  uploadProductImages.fields([
    { name: 'product_image', maxCount: 1 },
    { name: 'product_doc', maxCount: 1 }
  ]),
  productController.create_product);
// -------------------------------------------------------------------------------------------------------------------------------------------------------

router.get("/all", productController.get_all_products);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

router.get("/product/:productId", productController.get_product_by_id);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

router.delete("/all", productController.delete_all_products);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

router.delete("/product/:productId", productController.delete_product_by_id);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

router.put("/product/:productId", verifyJwt, uploadProductImages.fields([
  { name: 'product_image', maxCount: 1 },
  { name: 'product_doc', maxCount: 1 }
]), productController.update_product)

// -------------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = router; 