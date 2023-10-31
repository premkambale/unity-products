// This is main file for router where all routes will be exported;
const express = require('express');
const router = express.Router();


const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
 
const routes = [
  { path: '/users', route: authRoutes },
  { path: '/users', route: userRoutes },
]

routes.map((item) => {
  router.use(item.path, item.route);
})


// module exports router
module.exports = router;