import http from "../http";
import { apiUrl } from "./config";

const getProductsCategories = () => http.get(`${apiUrl()}/products/categories`)
const getProducts = (limit) => http.get(`${apiUrl()}/products?limit=${limit}`)
const getOneProduct = (productId) => http.get(`${apiUrl()}/products/${productId}`)

export { getProductsCategories, getProducts, getOneProduct }
