export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(url)
    .then((res) => res.json())
    .then((res) => res);
  return categories;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const products = await fetch(url)
    .then((res) => res.json());
    // .then((res) => res);
  return products;
}
