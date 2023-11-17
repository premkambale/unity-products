import { getActivProfile,getActiveImageProfile } from "./Profile";
import { ProfileConstant } from "./ProfileConstants";

const baseURL = getActivProfile(ProfileConstant.Test);
const imageBaseUrl = getActiveImageProfile("local")

export const Url = {
  
    // open api

    // tokenParse : baseURL + "tokenParse/",
    login: baseURL + "users/login-user",   //=======Login
    register: baseURL + "users/register",  //=========register

    // admin
  // All Products API's
    createProduct: baseURL + "products/create-product",  //===========create product,
    deleteAllProducts: baseURL + "products/all",    //============Delete all products,
    deleteProductById: baseURL + "products/product/id",  //==========delete product by Id
    getAllProducts: baseURL + "products/all", //===========get all products
    editProducts: baseURL + "/products/product/",  //+===========edit products
    getProductById: baseURL + "products/product/id", //==============get product By ID


    //All News APi's
    createNews: baseURL + "blogs/create-blog", //=================create news
    getAllNewsData:baseURL + "blogs/all", //===============get all news && same for delete all
    getNewsById: baseURL + "/blogs/blog/" ,//========get news by Id && same for delete and edit

    //all project API's
    getAllProjects: baseURL + "projects/all", // ===============get all projects both for get and delete
    getProjectById: baseURL + "projects/project/:projectId", //=========get , edit and delete project by ID\\

    //image baseUrl
    getImage: imageBaseUrl





};