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

const uploadProjectImages = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // cb(null, "project_images/");
      let destinationDirectory;
      if (file.mimetype.startsWith('image/')) {
        destinationDirectory = 'project_images/';
      }
      cb(null, destinationDirectory);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}${file.originalname}`);
    },
  }),
});
const uploadBlogImages = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // cb(null, "blog_images/");
      let destinationDirectory;
      if (file.mimetype.startsWith('image/')) {
        destinationDirectory = 'blog_images/';
      }
      cb(null, destinationDirectory);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}${file.originalname}`);
    },
  }),
});

module.exports = {
  uploadProductImages,
  uploadProjectImages,
  uploadBlogImages
};