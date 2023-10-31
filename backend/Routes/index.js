// This is main file for router where all routes will be exported;
const express = require('express');
const router = express.Router();


const authRoutes = require('./Auth/auth.routes');
const userRoutes = require('./Users/user.routes');
const productRoutes = require('./Products/product.routes');
 
const routes = [
  { path: '/users', route: authRoutes },
  { path: '/users', route: userRoutes },
  { path: '/products', route: productRoutes },
]

routes.map((item) => {
  router.use(item.path, item.route);
})


// module exports router
module.exports = router;