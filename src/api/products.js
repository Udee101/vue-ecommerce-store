import http from "../http";
import { apiUrl } from "./config";

const getProductsCategories = () => http.get(`${apiUrl()}/products/categories`)

export { getProductsCategories }
