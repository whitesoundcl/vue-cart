const URL = "http://sva.talana.com:8000/api";

//http://sva.talana.com:8000/api/product-category/

//http://sva.talana.com:8000/api/product/
export const fetchCategories = async () => {
  const response = await fetch(`${URL}/product-category`);
  return await response.json();
};

export const fetchProducts = async () => {
  const response = await fetch(`${URL}/product`);
  return await response.json();
};