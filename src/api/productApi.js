export async function searchProducts(query, page, signal) {
  const limit = 10;
  const skip = (page - 1) * limit;
  const url = `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  return data;
}
