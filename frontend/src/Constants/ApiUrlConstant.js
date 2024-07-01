import { getActivProfile, getActiveImageProfile } from "./Profile";
import { ProfileConstant } from "./ProfileConstants";

// const baseURL = getActivProfile(ProfileConstant.Prod);
// const imageBaseUrl = getActiveImageProfile("Prod")


const CurrentEnv = window.location.hostname
const REACT_APP_UAT_IP = process.env.REACT_APP_UAT_IP;
const REACT_APP_DEV_LOCAL = process.env.REACT_APP_DEV_LOCAL;
const REACT_APP_PROD_HOST = process.env.REACT_APP_PROD_HOST;

let baseURL;
let imageBaseUrl;

switch (CurrentEnv) {
  case REACT_APP_UAT_IP:
  case REACT_APP_DEV_LOCAL:
    baseURL = getActivProfile(ProfileConstant.UAT);
    imageBaseUrl = getActiveImageProfile("Prod")
    break;
  case REACT_APP_PROD_HOST:
    baseURL = getActivProfile(ProfileConstant.Prod);
    imageBaseUrl = getActiveImageProfile("Prod")
    break;
  default:
    baseURL = getActivProfile(ProfileConstant.Dev);
    imageBaseUrl = getActiveImageProfile("Prod")
}


export const Url = {
  // tokenParse : baseURL + "tokenParse/",
  login: baseURL + "users/login-user",   //=======Login
  register: baseURL + "users/register",  //=========register

  // admin
  // All Products API's
  createProduct: baseURL + "products/create-product",  //===========create product,
  deleteAllProducts: baseURL + "products/all",    //============Delete all products,
  deleteProductById: baseURL + "products/product/id",  //==========delete product by Id
  getAllProducts: baseURL + "products/all", //===========get all products
  editProducts: baseURL + "products/product/",  //+===========edit products
  getProductById: baseURL + "products/product/id", //==============get product By ID
  getProductByCategory: baseURL + "products/productCat/:product_category",


  //All News APi's
  createNews: baseURL + "blogs/create-blog", //=================create news
  getAllNewsData: baseURL + "blogs/all", //===============get all news && same for delete all
  getNewsById: baseURL + "blogs/blog/:blogId",//========get news by Id && same for delete and edit
  deleteNewsById: baseURL + "blogs/blog/:blogId",
  editNews: baseURL + "blogs/blog/:blogId",

  //all project API's
  getAllProjects: baseURL + "projects/all", // ===============get all projects both for get and delete
  getProjectById: baseURL + "projects/project/:projectId", //=========get , edit and delete project by ID\\

  //image baseUrl
  getImage: 'https://unity-products.onrender.com/'
};