const multer = require("multer");

const uploadProductImages = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // cb(null, "product_images/");
      let destinationDirectory;
      if (file.mimetype.startsWith('image/')) {
        destinationDirectory = 'product_images/';
      } else if (file.mimetype.startsWith('application/')) {
        destinationDirectory = 'product_doc/';
      }
      cb(null, destinationDirectory);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}${file.originalname}`);
    },
  }),
});

// const uploadProductPdf = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "product_doc/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, `${Date.now()}${file.originalname}`);
//     },
//   }),
// });

module.exports = {
  uploadProductImages,
  // uploadProductPdf
};