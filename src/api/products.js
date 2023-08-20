import http from "../http";
import { apiUrl } from "./config";

const getProductsCategories = () => http.get(`${apiUrl()}/products/categories`)
const getProducts = (limit) => http.get(`${apiUrl()}/products?limit=${limit}`)

export { getProductsCategories, getProducts }
