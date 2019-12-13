import { getFetch } from "../utils/apiUtils";

export const BASE_URL = "https://5df33ed29b71960014bf6a37.mockapi.io/api";

export function getProductsApi() {
  return getFetch(`${BASE_URL}/products`);
}

export function getProductByIdApi(productId) {
  return getFetch(`${BASE_URL}/products/${productId}`);
}
