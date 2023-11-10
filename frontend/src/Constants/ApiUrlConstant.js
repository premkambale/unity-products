import { getActivProfile } from "./Profile";
import { ProfileConstant } from "./ProfileConstants";

const baseURL = getActivProfile(ProfileConstant.Test);

export const Url = {
    // open api

    // tokenParse : baseURL + "tokenParse/",
    login: baseURL + "users/login-user",   //=======Login
    register: baseURL + "users/register",  //=========register

    // admin

    createProduct: baseURL + "products/create-product",  //===========create product,
    deleteAllProducts :baseURL + "products/all"  ,    //============Delete all products,
    deleteProductById: baseURL + "products/product/id",  //==========delete product by Id
    getAllProducts : baseURL + "products/all", //===========get all products
    editProducts: baseURL + "products/product/",  //+===========edit products
    getProductById : baseURL + "products/product/id" //==============get product By ID

};